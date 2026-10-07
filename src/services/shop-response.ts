import { PARTS } from '../data/parts';
import { SHOP_HOUND_PARTS } from '../data/shop-hounds';

// Copy of the request, placed at the front so the game accepts the reply.
const HEADER_LENGTH = 0x20;
// One half of the shop list. The first byte stays 0, or the game rejects the packet.
const SECTION_LENGTH = 0x3f4;
// Where the parts start. Before that: the name, five "new part" ids, and the hit part.
const RECORD_OFFSET = 0x34;
// Each part: id, stock, price, then the sales flag.
const RECORD_SIZE = 12;
// 80 parts fill one half. Part 81 would land on the start of the next half.
const MAX_PER_SECTION = Math.floor((SECTION_LENGTH - RECORD_OFFSET) / RECORD_SIZE);
// The shop list holds 160 parts, 80 in each half.
// Part 161 would overwrite the data that follows the list.
// The full set of parts does not fit. A slot can hold a part from another faction,
// so the 160 can be mixed. The list allows that mix, and it still stops at 160.
const MAX_LINEUP = MAX_PER_SECTION * 2;
// Which tab a part shows up in comes from the flag and the stock number, not the part itself.
//   N and stock 60000 or more    normal shop, the buy list
//   N and stock under 60000      home country lot
//   D, or anything that isn't N  capture lot
// Prototype and plunder are those two lots. We only send the normal shop.
//
// This number is written in the stock field. It does not decrease when a part is bought,
// and it is not the quantity shown in the shop. The game shows 99 minus how many the player already owns.
// Below 60000, the part leaves the buy list and appears in the home country lot.
const NORMAL_SALES_STOCK = 60000;
const SALES_FLAG = 'N'.charCodeAt(0); // Normal shop. Capture lot would be the letter D.

// First two letters of the part code. WH guns and GA parts get treated as weapons.
const FAMILY: Record<string, number> = {
  CK: 1, // cockpit
  LG: 2, // mobility base
  CP: 3, // system device
  GE: 4, // generator
  WP: 5, // weapon
  AX: 6, // assist part
  WJ: 7, // joint
};

// Next two letters. First one in each list is number 1. The digits on the end are the serial.
const SUBTYPE: Record<number, string[]> = {
  1: [
    'CA', // cockpit
    'CB', // cockpit
    'CC', // cockpit
  ],
  2: [
    'TL', // bipedal chassis
    'RJ', // inverse chassis
    'ML', // multi chassis
    'CL', // treaded chassis
    'HL', // hover chassis
    'WL', // wheeled chassis
  ],
  3: [
    'MC', // main computer
    'AS', // tactical computer
    'CT', // RC
  ],
  4: [
    'GA', // generator
    'GB', // generator
    'GC', // generator
  ],
  5: [
    'HC', // huge cannon
    'GN', // cannon
    'HW', // howitzer
    'MT', // mortar
    'SG', // sniper cannon
    'SR', // sniper rifle
    'AR', // assault rifle
    'MG', // machine gun
    'ST', // shotgun
    'GL', // grenade
    'CR', // heat rocket
    'CP', // anti hound pile
    'LM', // land mine
    'CB', // bomb dispenser
    'RL', // rocket
    'LR', // huge rocket
    'MS', // missile
    'SH', // weapon type, not in this shop
  ],
  6: [
    'RC', // rotorcraft
    'FS', // fuel tank
    'SP', // spacer
    'RD', // heat sink
    'SD', // sensor
    'AM', // armor
    'LT', // assist type, not in this shop
    'MC', // missile counter
    'JM', // na jammer
    'NM', // na marker
  ],
  7: [
    'UJ', // joint
    'RJ', // joint
    'LJ', // joint
  ],
};

// A stem is the part's code name, like CK_CA001. That's part_id in parts.ts.
// Two letters, underscore, two letters, then the number.
// Not the name on screen (M02CK Pickett), and not the number we send in the packet.
const STEM = /^([A-Z]{2})_([A-Z]{2})(\d+)$/;

export interface ShopRecord {
  partId: number; // the number the game looks the part up by, not how many are in stock
  price: number; // what it costs to buy
}

/** Turns a code name like CK_CA001 into the number the shop uses. */
export function assetPartId(stem: string): number | null {
  const match = STEM.exec(stem);
  if (!match) {
    return null;
  }
  const family = match[1] === 'WH' || match[1] === 'GA' ? 5 : FAMILY[match[1]];
  const subtype = family ? SUBTYPE[family].indexOf(match[2]) : -1;
  const serial = Number(match[3]);
  if (!family || subtype < 0 || serial > 0xffff) {
    return null;
  }
  return (family << 24) | ((subtype + 1) << 16) | serial;
}

// The price written next to that part in parts.ts. We copy it onto the shop row.
// That's the buy price. Selling it back uses the same number.
function catalogPrice(stem: string): number {
  const id = assetPartId(stem);
  const part = PARTS.find((entry) => entry.part_id === stem)
    ?? PARTS.find((entry) => id != null && entry.part_id && assetPartId(entry.part_id) === id);
  return typeof part?.price === 'number' ? part.price : 0;
}

/** One from each group, like CK_CA then LG_TL, so one family doesn't fill the list first. */
function spreadByPrefix(stems: string[]): string[] {
  const groups: string[][] = [];
  for (const stem of stems) {
    const prefix = stem.slice(0, 5);
    const last = groups[groups.length - 1];
    if (last && last[0].startsWith(prefix)) {
      last.push(stem);
    } else {
      groups.push([stem]);
    }
  }
  const spread: string[] = [];
  for (let index = 0; ; index++) {
    let added = false;
    for (const group of groups) {
      if (index < group.length) {
        spread.push(group[index]);
        added = true;
      }
    }
    if (!added) {
      return spread;
    }
  }
}

// Code names from parts.ts for this faction only. A is Tarakia, B is Morskoj, C is Sal Kar.
// One name per part. Skip a blank id. Campaign parts aren't in here.
// This list itself is not limited. The shop packet is, at 160, so this faction's
// parts and another faction's parts cannot all be shown together.
function catalogStems(faction: string): string[] {
  const stems: string[] = [];
  const seen = new Set<number>();
  for (const part of PARTS) {
    const id = part.part_id ? assetPartId(part.part_id) : null;
    if (part.faction !== faction || id == null || seen.has(id)) {
      continue;
    }
    seen.add(id);
    stems.push(part.part_id);
  }
  return stems;
}

/**
 * Hound parts are placed first, then the rest of that faction, up to 160.
 * Parts past 160 are left out. Hounds are first so they are kept.
 * Parts from other factions can be included. The list still stops at 160.
 * A is Tarakia, B is Morskoj, C is Sal Kar.
 */
function buyStems(faction: string): string[] {
  const stems: string[] = [];
  const seen = new Set<number>();
  const add = (stem: string) => {
    const id = assetPartId(stem);
    if (id == null || seen.has(id) || stems.length >= MAX_LINEUP) {
      return;
    }
    seen.add(id);
    stems.push(stem);
  };
  for (const stem of SHOP_HOUND_PARTS[faction] ?? []) {
    add(stem);
  }
  for (const stem of spreadByPrefix(catalogStems(faction))) {
    add(stem);
  }
  return stems;
}

export function currentLineup(faction?: string): ShopRecord[] {
  const code = faction?.toUpperCase();
  if (code !== 'A' && code !== 'B' && code !== 'C') {
    return [];
  }
  return buyStems(code).map((stem) => ({
    partId: assetPartId(stem) as number,
    price: catalogPrice(stem),
  }));
}

function writeSection(body: Buffer, section: number, records: ShopRecord[]): void {
  const base = section * SECTION_LENGTH;
  body.write('Buy', base + 1, 'ascii'); // section name. The game keeps the name from the first half.
  const count = Math.min(records.length, MAX_PER_SECTION);
  body[base + 0x32] = count; // how many parts follow
  if (section === 0 && count > 0) {
    const featured = records.slice(0, 5);
    for (let i = 0; i < featured.length; i++) {
      body.writeUInt32LE(featured[i].partId >>> 0, base + 0x18 + i * 4); // five "new part" spots
    }
    const hit = records.find((record) => record.partId === assetPartId('WH_HC001')) ?? records[0];
    body.writeUInt32LE(hit.partId >>> 0, base + 0x2c); // the one hit part
  }
  let cursor = base + RECORD_OFFSET;
  for (let i = 0; i < count; i++) {
    const record = records[i];
    body.writeUInt32LE(record.partId >>> 0, cursor); // part number
    body.writeUInt16LE(NORMAL_SALES_STOCK, cursor + 4); // keeps it on the buy list
    body.writeUInt16LE(record.price & 0xffff, cursor + 6); // price
    body[cursor + 8] = SALES_FLAG; // N is the normal shop, D is the capture lot
    cursor += RECORD_SIZE;
  }
}

/** Shop reply. First 80 parts go in the first half, the rest in the second. */
export function buildShopResponse(request: Buffer, records: ShopRecord[] = currentLineup()): Buffer {
  const packet = Buffer.alloc(HEADER_LENGTH + SECTION_LENGTH * 2);
  request.copy(packet, 0, 0, Math.min(HEADER_LENGTH, request.length));
  const body = packet.subarray(HEADER_LENGTH);
  writeSection(body, 0, records.slice(0, MAX_PER_SECTION));
  writeSection(body, 1, records.slice(MAX_PER_SECTION, MAX_LINEUP));
  return packet;
}
