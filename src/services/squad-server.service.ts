import { Injectable } from '@nestjs/common';
import { BaseUdpService } from './base-udp.service';
import { RemoteInfo } from 'dgram';
import { MessageDecoder } from '../utils/message-decoder.util';

interface TeamMember {
  userId: string;
  userName: string;
  userRank: number;
  leaderFlag: number;
  userNumber: number;
  xuid: string;
}

interface EmblemPattern {
  patternId: number;
  color: number;
  angle: number;
  expansionX: number;
  expansionY: number;
  coordX: number;
  coordY: number;
}

interface TeamInfo {
  teamName: string;
  countryCode: string; // Always A, B, or C (faction codes)
  numberOfMembers: number; // Max 20 members per squad
  teamRank: number;
  numberOfSorties: number; 
  numberOfWins: number;
  numberOfLosses: number; 
  numberOfShootDowns: number;
  numberOfConShootDowns: number;
  numberOfCombasDowns: number;
  numberOfCommandBaseDowns: number;
  teamColors: number[][];
  teamPattern: number;
  teamProfile: number;
  mainPlayTime: number;
  language: string; // Should be a string IE, EN
  strategy: number;
  recruitType: number;
  members: TeamMember[]; // Max 20 members per squad
  emblemData: EmblemPattern[];
}

@Injectable()
export class SquadServerService extends BaseUdpService {
  constructor() {
    super(1204, 'SQUAD_SERVER');
  }

  protected handleMessage(msg: Buffer, rinfo: RemoteInfo): void {
    const decoded = MessageDecoder.decodeMessage(msg);
    //this.logger.log(`[${this.label}] Received message from ${rinfo.address}:${rinfo.port}`);
    //this.logger.log(`[${this.label}] Raw hex: ${hexString}`);
    
    const xuidInfo = decoded.xuid ? `XUID: ${decoded.xuid}` : '';
    const playerInfo = decoded.gamertag ? ` | Player: ${decoded.gamertag}` : '';
    const factionInfo = decoded.faction ? ` | Faction: ${decoded.faction.name}` : '';
    const sequenceInfo = ` | Sequence: ${decoded.sequenceNumber}`;
    const additionalInfo = decoded.additionalInfo ? ` | ${decoded.additionalInfo}` : '';
    
    this.logger.log(
      `\x1b[36m${xuidInfo}${playerInfo}${factionInfo}${sequenceInfo}${additionalInfo}\x1b[0m`
    );
    
    // Need to decode structure for response. 
    const response = Buffer.from('430000001111111111110000000000000000003130303030303030321100000000', 'hex');
    this.sendResponse(response, rinfo);
  }
}