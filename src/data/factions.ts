export interface Faction {
  code: string;
  name: string;
  presidentRange: {
    start: number;
    end: number;
  };
}

export const FACTIONS: Faction[] = [
  {
    code: 'A',
    name: 'Tarakia',
    presidentRange: {
      start: 1,
      end: 13
    }
  },
  {
    code: 'B',
    name: 'Morskoj',
    presidentRange: {
      start: 14,
      end: 25
    }
  },
  {
    code: 'C',
    name: 'Sal Kar',
    presidentRange: {
      start: 26,
      end: 35
    }
  }
]; 