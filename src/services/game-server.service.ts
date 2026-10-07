import { Injectable } from '@nestjs/common';
import { BaseUdpService } from './base-udp.service';
import { RemoteInfo } from 'dgram';
import { MessageDecoder } from '../utils/message-decoder.util';
import { buildNeroStatus } from './server-status';

@Injectable()
export class GameServerService extends BaseUdpService {
  constructor() {
    super(1207, 'GAME_SERVER');
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

  private createResponseBuffer(): Buffer {
    return buildNeroStatus();
  }
}