import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameServerService } from './services/game-server.service';
import { WorldServerNoUpdateService, WorldServerUpdateService, WorldServerWTFService } from './services/world-server.service';
import { ShopServerNoUpdateService, ShopServerUpdateService, ShopServerWTFService } from './services/shop-server.service';
import { AresServerService } from './services/ares-server.service';
import { SquadServerService } from './services/squad-server.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    GameServerService,
    WorldServerNoUpdateService,
    WorldServerUpdateService,
    WorldServerWTFService,
    ShopServerNoUpdateService,
    ShopServerUpdateService,
    ShopServerWTFService,
    AresServerService,
    SquadServerService
  ],
})
export class AppModule {} 