import { Injectable } from '@nestjs/common';
import { RemoteInfo } from 'dgram';
import { MessageDecoder } from '../utils/message-decoder.util';
import { BaseUdpService } from './base-udp.service';
import { buildShopResponse, currentLineup } from './shop-response';

@Injectable()
export abstract class ShopServer extends BaseUdpService {
  constructor(port: number, label: string) {
    super(port, label);
  }

  protected handleMessage(msg: Buffer, rinfo: RemoteInfo): void {
    const decoded = MessageDecoder.decodeMessage(msg);
    const faction = decoded.faction?.code;
    this.logger.log(`${decoded.gamertag || 'unknown'} faction ${faction ?? 'unknown'}`);
    this.sendResponse(buildShopResponse(msg, currentLineup(faction)), rinfo);
  }
}

@Injectable()
export class ShopServerNoUpdateService extends ShopServer {
  constructor() {
    super(1208, 'SHOP_SERVER_NO_UPDATE');
  }
}

@Injectable()
export class ShopServerUpdateService extends ShopServer {
  constructor() {
    super(1257, 'SHOP_SERVER_UPDATE');
  }
}

@Injectable()
export class ShopServerRetailService extends ShopServer {
  constructor() {
    super(1388, 'SHOP_SERVER_RETAIL');
  }
}

@Injectable()
export class ShopServerRetailTitleUpdateService extends ShopServer {
  constructor() {
    super(1397, 'SHOP_SERVER_RETAIL_TITLE_UPDATE');
  }
}
