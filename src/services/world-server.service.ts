import { Injectable, Logger } from '@nestjs/common';
import { BaseUdpService } from './base-udp.service';
import { RemoteInfo } from 'dgram';
import { PRESIDENTS } from '../data/presidents';
import { FACTIONS } from '../data/factions';
import { MessageDecoder } from '../utils/message-decoder.util';

interface FactionData {
  total_revenue: number;    
  unknown1: number;         
  numAreas: number;         
  price_index: number;      
  exchange_rate: number;    
  population: number;       
  troop_strength: number;   
  research_level: number;   
  unknown2: number;         
  research_budget: number;  
  maintenance_budget: number; 
  military_budget: number;  
  unknown3: number;         
  president_id: number;     
  unknown4: number;         
  countryCode: string;      
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
      total_revenue: 1000000,    
      unknown1: 100,             
      numAreas: 9,              
      price_index: 1.25,        
      exchange_rate: 1000,      
      population: 5000000,      
      troop_strength: 50000,    
      research_level: 10,       
      unknown2: 2,              
      research_budget: 150000,  
      maintenance_budget: 200000, 
      military_budget: 100000,  
      unknown3: 1,              
      president_id: 4,
      unknown4: 1,              
      countryCode: 'A',         
    },
    {
      total_revenue: 1200000,    
      unknown1: 100,             
      numAreas: 8,              
      price_index: 1.30,        
      exchange_rate: 1100,      
      population: 5500000,      
      troop_strength: 55000,    
      research_level: 4,        
      unknown2: 2,              
      research_budget: 165000,  
      maintenance_budget: 220000, 
      military_budget: 110000,  
      unknown3: 2,              
      president_id: 18,
      unknown4: 2,              
      countryCode: 'B',         
    },
    {
      total_revenue: 800000,     
      unknown1: 100,             
      numAreas: 5,              
      price_index: 1.20,        
      exchange_rate: 900,       
      population: 4500000,      
      troop_strength: 45000,    
      research_level: 8,        
      unknown2: 2,              
      research_budget: 135000,  
      maintenance_budget: 180000, 
      military_budget: 90000,   
      unknown3: 3,              
      president_id: 26,
      unknown4: 3,              
      countryCode: 'C', 
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

    const response = this.createResponseBuffer();
    this.sendResponse(response, rinfo);
  }

  protected createResponseBuffer(): Buffer {
    const BUFFER_SIZE = 256;
    const buffer = Buffer.alloc(BUFFER_SIZE);
    
    buffer.writeUInt8(0x30, 20);
    buffer.writeUInt8(0x32, 21);
    
    const FACTION_A_OFFSET = 32;
    const FACTION_B_OFFSET = 92;
    const METADATA_OFFSET = 172;
    
    this.writeFactionData(buffer, FACTION_A_OFFSET, this.factions[0]);
    this.writeFactionData(buffer, FACTION_B_OFFSET, this.factions[1]);
    this.writeFactionData(buffer, FACTION_B_OFFSET + 60, this.factions[2]);
    
    const f1 = this.factions[0];
    buffer.writeUInt8(f1.countryCode.charCodeAt(0), 32);
    buffer.writeUInt8(f1.countryCode.charCodeAt(0), 60);
    buffer.writeUInt8(1, 68);
    
    const f2 = this.factions[1];
    buffer.writeUInt8(f2.countryCode.charCodeAt(0), 92);
    buffer.writeUInt8(f2.countryCode.charCodeAt(0), 120);
    buffer.writeUInt8(1, 128);
    buffer.writeUInt8(1, 160);
    
    const f3 = this.factions[2];
    buffer.writeUInt8(f3.countryCode.charCodeAt(0), 152);
    buffer.writeUInt8(f3.countryCode.charCodeAt(0), 180);
    
    buffer.writeUInt32LE(f1.total_revenue, 64);
    buffer.writeUInt32LE(f1.unknown1, 68);
    buffer.writeUInt32LE(f1.numAreas, 72); 
    buffer.writeFloatLE(f1.price_index, 76); 
    buffer.writeUInt32LE(f1.exchange_rate, 80); 
    buffer.writeUInt32LE(f1.population, 84); 
    buffer.writeUInt32LE(f1.troop_strength, 88);
    buffer.writeUInt16LE(f1.research_level, 96); 
    buffer.writeUInt32LE(f1.research_budget, 100);
    buffer.writeUInt32LE(f1.maintenance_budget, 104);
    buffer.writeUInt32LE(f1.military_budget, 108);
    buffer.writeUInt32LE(f1.unknown2, 112);
    buffer.writeUInt32LE(f1.president_id, 116);
    
    buffer.writeUInt32LE(f2.total_revenue, 124);
    buffer.writeUInt32LE(f2.unknown2, 128);
    buffer.writeUInt32LE(f2.numAreas, 132); 
    buffer.writeFloatLE(f2.price_index, 136);  
    buffer.writeUInt32LE(f2.exchange_rate, 140);  
    buffer.writeUInt32LE(f2.population, 144); 
    buffer.writeUInt32LE(f2.troop_strength, 148); 
    buffer.writeUInt16LE(f2.research_level, 156);  
    buffer.writeUInt32LE(f2.research_budget, 160);  
    buffer.writeUInt32LE(f2.maintenance_budget, 164); 
    buffer.writeUInt32LE(f2.military_budget, 168); 
    buffer.writeUInt32LE(f2.unknown2, 172);
    buffer.writeUInt32LE(f2.president_id, 176);

    buffer.writeUInt32LE(f3.total_revenue, 184);
    buffer.writeUInt32LE(f3.president_id, 188); 
    buffer.writeUInt32LE(f3.numAreas, 192);  
    buffer.writeFloatLE(f3.price_index, 196); 
    buffer.writeUInt32LE(f3.exchange_rate, 200); 
    buffer.writeUInt32LE(f3.population, 204);
    buffer.writeUInt32LE(f3.troop_strength, 208);
    buffer.writeUInt16LE(f3.research_level, 216); 
    buffer.writeUInt32LE(f3.research_budget, 220);
    buffer.writeUInt32LE(f3.maintenance_budget, 224);
    buffer.writeUInt32LE(f3.military_budget, 228);
    buffer.writeUInt32LE(f3.unknown2, 232);
    buffer.writeUInt32LE(f3.president_id, 236);

    buffer.writeUInt8(0x00, METADATA_OFFSET + 6);
    
    return buffer;
  }

  private writeFactionData(buffer: Buffer, startOffset: number, faction: FactionData): void {
    buffer.writeUInt32LE(faction.total_revenue, startOffset);
    buffer.writeUInt32LE(faction.unknown1, startOffset + 4);
    buffer.writeUInt32LE(faction.numAreas, startOffset + 8);
    buffer.writeFloatLE(faction.price_index, startOffset + 12);
    buffer.writeUInt32LE(faction.exchange_rate, startOffset + 16);
    buffer.writeUInt32LE(faction.population, startOffset + 20);
    buffer.writeUInt32LE(faction.troop_strength, startOffset + 24);
    buffer.writeUInt16LE(faction.research_level, startOffset + 28);
    buffer.writeUInt8(faction.unknown2, startOffset + 30);
    buffer.writeUInt32LE(faction.research_budget, startOffset + 32);
    buffer.writeUInt32LE(faction.maintenance_budget, startOffset + 36);
    buffer.writeUInt32LE(faction.military_budget, startOffset + 40);
    buffer.writeUInt8(faction.unknown3, startOffset + 44);
    buffer.writeUInt32LE(faction.president_id, startOffset + 48);
    buffer.writeUInt32LE(faction.unknown4, startOffset + 52);
    buffer.writeUInt32LE(0, startOffset + 56);
    
    buffer.writeUInt8(faction.countryCode.charCodeAt(0), startOffset + 56);
    buffer.writeUInt8(faction.unknown2, startOffset + 57);
    buffer.writeUInt8(faction.unknown2, startOffset + 58);
    buffer.writeUInt8(faction.unknown2, startOffset + 59);
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