import { dateToServerFormat, getRelativeDate } from '../utils/date.utils';

// The lobby reads this window against the server clock.
// A start within 15 minutes opens the countdown.
// A clock inside the window opens the maintenance dialog.
// A clock past the end opens the follow-up dialog.
// Starting a year out leaves all three closed.
// Byte 63 is the server-down flag. 0 means the server is up.
export function buildNeroStatus(): Buffer {
  const maintStart = getRelativeDate(24 * 365);
  const maintEnd = getRelativeDate(24 * 365 * 2);
  return buildStatus(maintStart, maintEnd, 0x00);
}

function buildStatus(maintStart: Date, maintEnd: Date, serverDown: number): Buffer {
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
  buffer[63] = serverDown;

  return buffer;
}
