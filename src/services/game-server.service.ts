import { Injectable } from '@nestjs/common';
import { BaseUdpService } from './base-udp.service';
import { getRelativeDate, dateToServerFormat } from '../utils/date.utils';
import { RemoteInfo } from 'dgram';
import { FACTIONS } from '../data/factions';
import { MessageDecoder } from '../utils/message-decoder.util';

@Injectable()
export class GameServerService extends BaseUdpService {
  
  private readonly NERO_MODE = false // Currently set to maintenance mode. Setting true will fail startup into Neroimus War. [Unsupported at this time]
  
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
    if (this.NERO_MODE) {
      return this.createNeroBuffer();
    } else {
      return this.createMaintenanceBuffer();
    }
  }

  private createMaintenanceBuffer(): Buffer {
    const now = getRelativeDate();
    const maintStart = getRelativeDate(-365);
    const maintEnd = getRelativeDate(365);
    return this.buildBuffer(maintStart, maintEnd, 0x00);
  }


  // Will fix later.
  private createNeroBuffer(): Buffer {
    const buffer = Buffer.alloc(64);
    
    const header = Buffer.from('CH' + '0'.repeat(23) + '1');
    const padding = Buffer.from([0, 0, 0, 0, 0x00]);
    const season = Buffer.from([0x01, 0x00, 0x00, 0x00]);
    const version = Buffer.from([0x00, 0x00, 0x10, 0x00]);
    const serverTime = Buffer.from(dateToServerFormat(getRelativeDate()));

    header.copy(buffer, 0);
    padding.copy(buffer, 27);
    season.copy(buffer, 32);
    version.copy(buffer, 36);
    serverTime.copy(buffer, 40);
    buffer[47] = 0x04;

    const sourceBuffer = Buffer.alloc(60);
    sourceBuffer.copy(buffer, 48);

    return buffer;
  }

  private buildBuffer(maintStart: Date, maintEnd: Date, byte63Value: number): Buffer {
    const buffer = Buffer.alloc(64);
    
    const header = Buffer.from('CH' + '0'.repeat(23) + '1');
    const padding = Buffer.from([0, 0, 0, 0, 0x00]);
    const season = Buffer.from([0x01, 0x00, 0x00, 0x00]);
    const version = Buffer.from([0x00, 0x00, 0x10, 0x00]);
    const serverTime = Buffer.from(dateToServerFormat(getRelativeDate()));
    const maintBegins = Buffer.from(dateToServerFormat(maintStart));
    const maintEnds = Buffer.from(dateToServerFormat(maintEnd));

    header.copy(buffer, 0);
    padding.copy(buffer, 27);
    season.copy(buffer, 32);
    version.copy(buffer, 36);
    serverTime.copy(buffer, 40);
    buffer[47] = 0x04;
    maintBegins.copy(buffer, 48);
    buffer[55] = 0x12;
    maintEnds.copy(buffer, 56);
    buffer[62] = 0x00;
    buffer[63] = byte63Value;

    return buffer;
  }
}