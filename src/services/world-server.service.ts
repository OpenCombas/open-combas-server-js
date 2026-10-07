import { Injectable, Logger } from '@nestjs/common';
import { BaseUdpService } from './base-udp.service';
import { RemoteInfo } from 'dgram';
import { PRESIDENTS } from '../data/presidents';
import { FACTIONS } from '../data/factions';
import { MessageDecoder } from '../utils/message-decoder.util';
import { buildNeroStatus } from './server-status';

// One country inside the world record. Stride is 0x3c, first country at body+0x1c.
// Multi-byte fields are little-endian; the client swaps them before display.
// Names are the labels logged by Function_823BD228 @ 823bd228.
interface FactionData {
  countryCode: string; // +0 Country Code, 'A' 'B' or 'C'
  total_revenue: number; // +4 Total Income
  fixedIncome: number; // +8 Fixed income
  numAreas: number; // +12 Number Of Area, one byte
  price_index: number; // +16 Prices Value, float
  exchange_rate: number; // +20 Pay Rate
  population: number; // +24 Population
  troop_strength: number; // +28 Number Of Soldier
  players: number; // +32 Number Of Player
  research_level: number; // +36 Develop Level, uint16
  research_budget: number; // +40 Develop Budget
  maintenance_budget: number; // +44 Facilities Budget
  military_budget: number; // +48 Attack Budget
  developGrowth: number; // +52 Dev Lvl Grow, float
  president_id: number; // +56 president ID, one byte
  dead: number; // +58 Dead Flg. Non-zero marks the country dead.
}

@Injectable()
export class WORLD_SERVER extends BaseUdpService {
  protected readonly logger = new Logger(WORLD_SERVER.name);

  /**
   * Validates if a president ID is valid for a given faction
   * @param presidentId The president ID to validate
   * @param factionCode The faction code (A, B, or C)
   * @returns true if the president ID is 0 or if the president exists and belongs to the faction
   */
  private validatePresidentId(presidentId: number, factionCode: string): boolean {
    // Allow president ID 0 for any faction
    if (presidentId === 0) return true;
    
    const faction = FACTIONS.find(f => f.code === factionCode);
    if (!faction) {
      this.logger.error(`Invalid faction code ${factionCode} -- Valid codes are: ${FACTIONS.map(f => f.code).join(', ')}`);
      return false;
    }
    
    const president = PRESIDENTS.find(p => p.id === presidentId.toString());
    if (!president || president.faction !== factionCode) {
      this.logger.error(`Invalid president id ${presidentId} for faction ${factionCode} -- Valid range ${faction.presidentRange.start}-${faction.presidentRange.end} or 0`);
      return false;
    }
    return true;
  }

  /**
   * Validates if a country code is valid according to the FACTIONS data
   * @param countryCode The country code to validate
   * @returns true if the country code exists in FACTIONS
   */
  private validateCountryCode(countryCode: string): boolean {
    const faction = FACTIONS.find(f => f.code === countryCode);
    if (!faction) {
      this.logger.error(`Invalid country code ${countryCode} -- Valid codes are: ${FACTIONS.map(f => f.code).join(', ')}`);
      return false;
    }
    return true;
  }

  private readonly factions: FactionData[] = [
    {
      countryCode: 'A',
      total_revenue: 1000000,
      fixedIncome: 100,
      numAreas: 8,
      price_index: 1.25,
      exchange_rate: 1000,
      population: 5000000,
      troop_strength: 50000,
      players: 100,
      research_level: 10,
      research_budget: 150000,
      maintenance_budget: 200000,
      military_budget: 100000,
      developGrowth: 1,
      president_id: 4,
      dead: 0,
    },
    {
      countryCode: 'B',
      total_revenue: 1200000,
      fixedIncome: 100,
      numAreas: 8,
      price_index: 1.30,
      exchange_rate: 1100,
      population: 5500000,
      troop_strength: 55000,
      players: 100,
      research_level: 4,
      research_budget: 165000,
      maintenance_budget: 220000,
      military_budget: 110000,
      developGrowth: 1,
      president_id: 18,
      dead: 0,
    },
    {
      countryCode: 'C',
      total_revenue: 800000,
      fixedIncome: 100,
      numAreas: 6,
      price_index: 1.20,
      exchange_rate: 900,
      population: 4500000,
      troop_strength: 45000,
      players: 100,
      research_level: 8,
      research_budget: 135000,
      maintenance_budget: 180000,
      military_budget: 90000,
      developGrowth: 1,
      president_id: 26,
      dead: 0,
    }
  ];

  constructor(port: number, serviceName: string) {
    super(port, serviceName);
    // Validate all president IDs and country codes on startup
    this.factions.forEach(faction => {
      this.validatePresidentId(faction.president_id, faction.countryCode);
      this.validateCountryCode(faction.countryCode);
    });
    try {
      const buffer = this.getResponseBuffer();
      //console.log('World Server Response:', buffer.toString('hex'));
    } catch (error) {
      this.logger.error('Error creating response buffer:', error);
    }
  }

  protected handleMessage(msg: Buffer, rinfo: RemoteInfo): void {
    const decoded = MessageDecoder.decodeMessage(msg);
    
    const xuidInfo = decoded.xuid ? `XUID: ${decoded.xuid}` : '';
    const playerInfo = ` | Player: ${decoded.gamertag}`;
    const factionInfo = decoded.faction ? ` | Faction: ${decoded.faction.name}` : '';
    const sequenceInfo = decoded.sequenceNumber !== 'HELLO' ? ` | Sequence: ${decoded.sequenceNumber}` : '';
    const additionalInfo = decoded.additionalInfo ? ` | ${decoded.additionalInfo}` : '';
    
    this.logger.log(
      `\x1b[36m${xuidInfo}${playerInfo}${factionInfo}${sequenceInfo}${additionalInfo}\x1b[0m`
    );

    const response = this.createResponseBuffer(msg);
    this.sendResponse(response, rinfo);
  }

  // Reply keeps the request header, including the sequence at offset 0x14.
  // The body is the country record: status byte 0, then three factions.
  protected createResponseBuffer(request?: Buffer): Buffer {
    if (!request) {
      return buildNeroStatus();
    }
    return this.buildCountryPacket(request);
  }

  private buildCountryPacket(request: Buffer): Buffer {
    const HEADER = 0x20;
    const BODY = 0x21c;
    const packet = Buffer.alloc(HEADER + BODY);
    request.copy(packet, 0, 0, Math.min(HEADER, request.length));

    const body = packet.subarray(HEADER);
    body.write('01', 1, 'ascii');
    body.writeUInt32LE(Math.floor(Date.now() / 1000), 0x18);
    this.factions.forEach((faction, index) => this.writeFaction(body, index, faction));
    return packet;
  }

  // Faction stride is 0x3c. The lobby counts Dead Flg across the three countries
  // and tries to join a squad party while fewer than two are set.
  private writeFaction(body: Buffer, index: number, faction: FactionData): void {
    const base = 0x1c + index * 0x3c;
    body.writeUInt8(faction.countryCode.charCodeAt(0), base); // Country Code
    body.writeUInt32LE(faction.total_revenue, base + 4); // Total Income
    body.writeUInt32LE(faction.fixedIncome, base + 8); // Fixed income
    body.writeUInt8(faction.numAreas, base + 12); // Number Of Area
    body.writeFloatLE(faction.price_index, base + 16); // Prices Value
    body.writeUInt32LE(faction.exchange_rate, base + 20); // Pay Rate
    body.writeUInt32LE(faction.population, base + 24); // Population
    body.writeUInt32LE(faction.troop_strength, base + 28); // Number Of Soldier
    body.writeUInt32LE(faction.players, base + 32); // Number Of Player
    body.writeUInt16LE(faction.research_level, base + 36); // Develop Level
    body.writeUInt32LE(faction.research_budget, base + 40); // Develop Budget
    body.writeUInt32LE(faction.maintenance_budget, base + 44); // Facilities Budget
    body.writeUInt32LE(faction.military_budget, base + 48); // Attack Budget
    body.writeFloatLE(faction.developGrowth, base + 52); // Dev Lvl Grow
    body.writeUInt8(faction.president_id, base + 56); // president ID
    body.writeUInt8(faction.dead, base + 58); // Dead Flg
  }

  public getResponseBuffer(): Buffer {
    return this.createResponseBuffer();
  }
}

@Injectable()
export class WorldServerNoUpdateService extends WORLD_SERVER {
  constructor() {
    super(1215, 'WORLD_SERVER_NO_UPDATE');
  }
}

@Injectable()
export class WorldServerUpdateService extends WORLD_SERVER {
  constructor() {
    super(1255, 'WORLD_SERVER_UPDATE');
  }
}

@Injectable()
export class WorldServerWTFService extends WORLD_SERVER {
  constructor() {
    super(1395, 'WORLD_SERVER_WTF');
  }
}