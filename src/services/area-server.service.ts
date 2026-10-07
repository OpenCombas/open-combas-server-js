import { Injectable } from '@nestjs/common';
import { BaseUdpService } from './base-udp.service';
import { RemoteInfo } from 'dgram';
import { MessageDecoder } from '../utils/message-decoder.util';
import { MAPS } from '../data/maps';

@Injectable()
export class AreaServerService extends BaseUdpService {
  constructor() {
    super(1216, 'AREA_SERVER');
  }

  protected handleMessage(msg: Buffer, rinfo: RemoteInfo): void {
    const decoded = MessageDecoder.decodeMessage(msg);
    const xuidInfo = decoded.xuid ? `XUID: ${decoded.xuid}` : '';
    const playerInfo = decoded.gamertag ? ` | Player: ${decoded.gamertag}` : '';
    const factionInfo = decoded.faction ? ` | Faction: ${decoded.faction.name}` : '';
    const sequenceInfo = decoded.sequenceNumber !== 'HELLO' ? ` | Sequence: ${decoded.sequenceNumber}` : '';
    const additionalInfo = decoded.additionalInfo ? ` | ${decoded.additionalInfo}` : '';

    this.logger.log(
      `\x1b[36m${xuidInfo}${playerInfo}${factionInfo}${sequenceInfo}${additionalInfo}\x1b[0m`
    );

    const response = this.buildAreaPacket(msg);
    this.sendResponse(response, rinfo);
  }

  // 25 area slots. The map stays empty while the count byte at 0x1c is 0.
  private buildAreaPacket(request: Buffer): Buffer {
    const HEADER = 0x20;
    const BODY = 0x2dc;
    const packet = Buffer.alloc(HEADER + BODY);
    request.copy(packet, 0, 0, Math.min(HEADER, request.length));

    const body = packet.subarray(HEADER);
    const areas = MAPS.filter((map) => map.areaId >= 1 && map.areaId <= 22);
    body.write('01', 1, 'ascii');
    body.writeUInt32LE(Math.floor(Date.now() / 1000), 0x18);
    body.writeUInt8(areas.length, 0x1c);
    areas.forEach((area, index) => {
      const base = 0x20 + index * 0x1c;
      const points = 10000;
      const owner = area.faction === 'A' ? 12 : area.faction === 'B' ? 16 : 20;
      body.writeUInt8(area.areaId, base);
      body.writeUInt8(area.faction.charCodeAt(0), base + 1);
      body.writeUInt8(area.areaId <= 3 ? 1 : 0, base + 2);
      body.writeUInt32LE(points, base + 4);
      body.writeUInt32LE(points, base + owner);
      if (area.areaId <= 3) {
        body.writeUInt8(1, base + (area.faction === 'A' ? 24 : area.faction === 'B' ? 25 : 26));
      }
    });
    return packet;
  }
}
