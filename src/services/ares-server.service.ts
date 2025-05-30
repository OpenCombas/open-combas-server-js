import { Injectable } from '@nestjs/common';
import { BaseUdpService } from './base-udp.service';
import { RemoteInfo } from 'dgram';
import { MessageDecoder } from '../utils/message-decoder.util';

@Injectable()
export class AresServerService extends BaseUdpService {
  constructor() {
    super(1216, 'ARES_SERVER');
  }

  protected handleMessage(msg: Buffer, rinfo: RemoteInfo): void {
    const hexString = msg.toString('hex').toUpperCase();
    this.logger.log(`[${this.label}] Received message from ${rinfo.address}:${rinfo.port}`);
    this.logger.log(`[${this.label}] Raw hex: ${hexString}`);
    
    try {
      const decoded = MessageDecoder.decodeMessage(msg);
      if (decoded.gamertag) {
        const xuidInfo = decoded.xuid ? `XUID: ${decoded.xuid}` : '';
        const playerInfo = ` | Player: ${decoded.gamertag}`;
        const factionInfo = decoded.faction ? ` | Faction: ${decoded.faction.name}` : '';
        const sequenceInfo = decoded.sequenceNumber !== 'HELLO' ? ` | Sequence: ${decoded.sequenceNumber}` : '';
        const additionalInfo = decoded.additionalInfo ? ` | ${decoded.additionalInfo}` : '';
        
        this.logger.log(
          `\x1b[36m${xuidInfo}${playerInfo}${factionInfo}${sequenceInfo}${additionalInfo}\x1b[0m`
        );

        // not yet succeeding.
        const response = Buffer.from('4300000000000000000000000000000000000001303030303030303200000000', 'hex');
        this.sendResponse(response, rinfo);
      }
    } catch (error) {
      this.logger.error(`[${this.label}] Failed to decode message:`, error);
    }
  }
} 