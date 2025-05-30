import { Injectable } from '@nestjs/common';
import { BaseUdpService } from './base-udp.service';
import { RemoteInfo } from 'dgram';
import { MessageDecoder } from '../utils/message-decoder.util';

@Injectable()
export class SHOP_SERVER extends BaseUdpService {
  constructor(port: number, serviceName: string) {
    super(port, serviceName);
  }

  protected handleMessage(msg: Buffer, rinfo: RemoteInfo): void {
    const hexString = msg.toString('hex').toUpperCase();
    this.logger.log(`[${this.label}] Received message from ${rinfo.address}:${rinfo.port}`);
    this.logger.log(`[${this.label}] Raw hex: ${hexString}`);
    
    const decoded = MessageDecoder.decodeMessage(msg);
    const xuidInfo = decoded.xuid ? `XUID: ${decoded.xuid}` : '';
    const playerInfo = ` | Player: ${decoded.gamertag}`;
    const factionInfo = decoded.faction ? ` | Faction: ${decoded.faction.name}` : '';
    const sequenceInfo = decoded.sequenceNumber !== 'HELLO' ? ` | Sequence: ${decoded.sequenceNumber}` : '';
    const additionalInfo = decoded.additionalInfo ? ` | ${decoded.additionalInfo}` : '';
    
    this.logger.log(
      `\x1b[36m${xuidInfo}${playerInfo}${factionInfo}${sequenceInfo}${additionalInfo}\x1b[0m`
    );


    // Unfinished
    const response = Buffer.from('434800E330303030303030303030303030303030303030303030303200000000000000000000050000000E0064000100640002006400030064000400640005009600330096003400960035009600360096003700960038009600390096003A0096003B0096003C0096003D0096003E0096003F0096004000960041009600420096004300960044009600450096004600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000', 'hex');
    this.sendResponse(response, rinfo);

  }
}

@Injectable()
export class ShopServerNoUpdateService extends SHOP_SERVER {
  constructor() {
    super(1208, 'SHOP_SERVER_NO_UPDATE');
  }
}

@Injectable()
export class ShopServerUpdateService extends SHOP_SERVER {
  constructor() {
    super(1257, 'SHOP_SERVER_UPDATE');
  }
}

@Injectable()
export class ShopServerWTFService extends SHOP_SERVER {
  constructor() {
    super(1397, 'SHOP_SERVER_WTF');
  }
} 