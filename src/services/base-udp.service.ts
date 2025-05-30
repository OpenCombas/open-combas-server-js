import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { Socket, RemoteInfo } from 'dgram';

@Injectable()
export abstract class BaseUdpService implements OnModuleInit, OnModuleDestroy {
  protected server: Socket;
  protected readonly port: number;
  protected readonly label: string;
  protected readonly logger: Logger;

  constructor(port: number, label: string) {
    this.port = port;
    this.label = label;
    this.logger = new Logger(label);
  }

  onModuleInit() {
    const dgram = require('dgram');
    this.server = dgram.createSocket('udp4');
    
    this.server.on('message', (msg: Buffer, rinfo: RemoteInfo) => {
      this.logger.log(`Received ${msg.length} bytes from ${rinfo.address}:${rinfo.port}`);
      this.handleMessage(msg, rinfo);
    });

    this.server.on('error', (err: Error) => {
      this.logger.error(`Error in ${this.label}: ${err.message}`);
      this.server.close();
    });

    this.server.on('listening', () => {
      const address = this.server.address();
      this.logger.log(`${this.label} listening on port ${this.port}`);
    });

    this.server.bind(this.port);
  }

  onModuleDestroy() {
    if (this.server) {
      this.logger.log(`${this.label} shutting down`);
      this.server.close();
    }
  }

  protected abstract handleMessage(msg: Buffer, rinfo: RemoteInfo): void;

  protected sendResponse(response: Buffer, rinfo: RemoteInfo): void {
    this.server.send(response, rinfo.port, rinfo.address, (err) => {
      if (err) {
        this.logger.error(`Error sending response to ${rinfo.address}:${rinfo.port}: ${err.message}`);
      } else {
        this.logger.log(`Sent ${response.length} bytes to ${rinfo.address}:${rinfo.port}`);
      }
    });
  }
}
