import { FACTIONS } from '../data/factions';

export interface DecodedMessage {
  sequenceNumber: string;
  gamertag?: string;
  faction?: {
    code: string;
    name: string;
  };
  additionalInfo?: string;
  xuid?: string;
}

export class MessageDecoder {
  /**
   * Decodes a UDP message from any of the Chromehounds services
   * @param msg The raw message buffer
   * @returns Decoded message containing sequenceNumber, gamertag, faction, and any additional info
   */
  
  static decodeMessage(msg: Buffer): DecodedMessage {
    const hex = msg.toString('hex').toUpperCase();
    const sequenceHex = hex.substring(8, 60);
    const fullSequence = Buffer.from(sequenceHex, 'hex').toString('ascii');
    
    const result: DecodedMessage = {
      sequenceNumber: fullSequence
    };

    if (fullSequence.length >= 20 && fullSequence.startsWith('0009')) {
      result.xuid = fullSequence.substring(0, 16);
      result.sequenceNumber = fullSequence.substring(16);
    }

    const nullTerminatorIndex = hex.indexOf('00', 60);
    const startIndex = nullTerminatorIndex !== -1 ? nullTerminatorIndex : 60;
    
    let gamertagStart = -1;
    for (let i = startIndex; i < hex.length - 1; i += 2) {
      const byte1 = parseInt(hex.substring(i, i + 2), 16);
      const byte2 = parseInt(hex.substring(i + 2, i + 4), 16);
      
      if (byte1 >= 32 && byte1 <= 126 && byte2 >= 32 && byte2 <= 126) {
        gamertagStart = i;
        break;
      }
    }
    
    if (gamertagStart !== -1) {
      const endIndex = hex.indexOf('2C', gamertagStart) !== -1 ? 
        hex.indexOf('2C', gamertagStart) : 
        hex.indexOf('00', gamertagStart) !== -1 ? 
          hex.indexOf('00', gamertagStart) : 
          hex.length;

      result.gamertag = Buffer.from(hex.substring(gamertagStart, endIndex), 'hex').toString('ascii');
      
      const factionCodes = ['41', '42', '43'];
      for (const code of factionCodes) {
        const factionIndex = hex.indexOf(code, gamertagStart);
        if (factionIndex !== -1) {
          const factionChar = Buffer.from(code, 'hex').toString('ascii');
          const faction = FACTIONS.find(f => f.code === factionChar);
          if (faction) {
            result.faction = {
              code: faction.code,
              name: faction.name
            };
            break;
          }
        }
      }

      const commaIndex = hex.indexOf('2C', gamertagStart);
      if (commaIndex !== -1) {
        const additionalInfoStart = commaIndex + 2;
        const additionalInfoEnd = hex.indexOf('00', additionalInfoStart) !== -1 ? 
          hex.indexOf('00', additionalInfoStart) : 
          hex.length;
        
        if (additionalInfoStart < additionalInfoEnd) {
          result.additionalInfo = Buffer.from(
            hex.substring(additionalInfoStart, additionalInfoEnd), 
            'hex'
          ).toString('ascii');
        }
      }
    }

    return result;
  }
} 