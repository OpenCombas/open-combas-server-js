export interface Part {
  /** Dense shop/runtime id: index in lang_id ascending order (not equal to lang_id). */
  part_id: number;
  lang_id: number;
  part_name: string;
  part_type: string;
  faction: string;
  /** Shop buy price (LineUp Parts Price). */
  price: number;
}

export const PARTS: Part[] = [
  {
    part_id: 0,
    lang_id: 1001,
    part_name: "M02CK Pickett",
    part_type: "cockpit",
    faction: "A",
    price: 16000
  },
  {
    part_id: 1,
    lang_id: 1002,
    part_name: "M07CK Brooke",
    part_type: "cockpit",
    faction: "A",
    price: 17500
  },
  {
    part_id: 2,
    lang_id: 1003,
    part_name: "M01CK Forrest",
    part_type: "cockpit",
    faction: "A",
    price: 14500
  },
  {
    part_id: 3,
    lang_id: 1004,
    part_name: "M03CK Jackson",
    part_type: "cockpit",
    faction: "A",
    price: 20000
  },
  {
    part_id: 4,
    lang_id: 1031,
    part_name: "MSK-C10",
    part_type: "cockpit",
    faction: "B",
    price: 12500
  },
  {
    part_id: 5,
    lang_id: 1032,
    part_name: "MSK-C20",
    part_type: "cockpit",
    faction: "B",
    price: 14000
  },
  {
    part_id: 6,
    lang_id: 1061,
    part_name: "C-Sal Kar",
    part_type: "cockpit",
    faction: "C",
    price: 16500
  },
  {
    part_id: 7,
    lang_id: 1062,
    part_name: "C-Naml",
    part_type: "cockpit",
    faction: "C",
    price: 18000
  },
  {
    part_id: 8,
    lang_id: 1063,
    part_name: "C-Dabbur",
    part_type: "cockpit",
    faction: "C",
    price: 18500
  },
  {
    part_id: 9,
    lang_id: 1064,
    part_name: "C-Ankabut",
    part_type: "cockpit",
    faction: "C",
    price: 20000
  },
  {
    part_id: 10,
    lang_id: 1301,
    part_name: "M04CK Stuart",
    part_type: "cockpit",
    faction: "A",
    price: 19000
  },
  {
    part_id: 11,
    lang_id: 1302,
    part_name: "M05CK Johnston",
    part_type: "cockpit",
    faction: "A",
    price: 21000
  },
  {
    part_id: 12,
    lang_id: 1303,
    part_name: "M06CK Lee",
    part_type: "cockpit",
    faction: "A",
    price: 23000
  },
  {
    part_id: 13,
    lang_id: 1331,
    part_name: "MSK-C100",
    part_type: "cockpit",
    faction: "B",
    price: 16500
  },
  {
    part_id: 14,
    lang_id: 1332,
    part_name: "MSK-C110",
    part_type: "cockpit",
    faction: "B",
    price: 17500
  },
  {
    part_id: 15,
    lang_id: 1361,
    part_name: "C-Nahl",
    part_type: "cockpit",
    faction: "C",
    price: 22000
  },
  {
    part_id: 16,
    lang_id: 1362,
    part_name: "C-Jarad",
    part_type: "cockpit",
    faction: "C",
    price: 23500
  },
  {
    part_id: 17,
    lang_id: 1363,
    part_name: "C-Farasha",
    part_type: "cockpit",
    faction: "C",
    price: 25000
  },
  {
    part_id: 18,
    lang_id: 1631,
    part_name: "MSK-C1000",
    part_type: "cockpit",
    faction: "B",
    price: 19000
  },
  {
    part_id: 19,
    lang_id: 1632,
    part_name: "MSK-C1500",
    part_type: "cockpit",
    faction: "B",
    price: 20000
  },
  {
    part_id: 20,
    lang_id: 1633,
    part_name: "MSK-C1001",
    part_type: "cockpit",
    faction: "B",
    price: 24000
  },
  {
    part_id: 21,
    lang_id: 1701,
    part_name: "RFZ-CK-A1",
    part_type: "cockpit",
    faction: "A",
    price: null
  },
  {
    part_id: 22,
    lang_id: 1703,
    part_name: "RFZ-CK-A2",
    part_type: "cockpit",
    faction: "A",
    price: null
  },
  {
    part_id: 23,
    lang_id: 1731,
    part_name: "RFZ-CK-B1",
    part_type: "cockpit",
    faction: "B",
    price: null
  },
  {
    part_id: 24,
    lang_id: 1761,
    part_name: "RFZ-CK-A3",
    part_type: "cockpit",
    faction: "C",
    price: null
  },
  {
    part_id: 25,
    lang_id: 2001,
    part_name: "M03TL Garfield",
    part_type: "mobility_base", // bipedal chassis
    faction: "A",
    price: 16000
  },
  {
    part_id: 26,
    lang_id: 2002,
    part_name: "M10TL Shaw",
    part_type: "mobility_base", // bipedal chassis
    faction: "A",
    price: 23000
  },
  {
    part_id: 27,
    lang_id: 2003,
    part_name: "M13TL Scott",
    part_type: "mobility_base", // bipedal chassis
    faction: "A",
    price: 21000
  },
  {
    part_id: 28,
    lang_id: 2031,
    part_name: "MSK-TL500",
    part_type: "mobility_base", // bipedal chassis
    faction: "B",
    price: 14000
  },
  {
    part_id: 29,
    lang_id: 2032,
    part_name: "MSK-TL501",
    part_type: "mobility_base", // bipedal chassis
    faction: "B",
    price: 16000
  },
  {
    part_id: 30,
    lang_id: 2061,
    part_name: "TL-Sal Kar",
    part_type: "mobility_base", // bipedal chassis
    faction: "C",
    price: 19500
  },
  {
    part_id: 31,
    lang_id: 2062,
    part_name: "TL-Dhib",
    part_type: "mobility_base", // bipedal chassis
    faction: "C",
    price: 21500
  },
  {
    part_id: 32,
    lang_id: 2063,
    part_name: "TL-Kalb",
    part_type: "mobility_base", // bipedal chassis
    faction: "C",
    price: 23000
  },
  {
    part_id: 33,
    lang_id: 2301,
    part_name: "M01RJ Burns",
    part_type: "mobility_base", // inverse chassis
    faction: "A",
    price: 15000
  },
  {
    part_id: 34,
    lang_id: 2302,
    part_name: "M08RJ Hancock",
    part_type: "mobility_base", // inverse chassis
    faction: "A",
    price: 19500
  },
  {
    part_id: 35,
    lang_id: 2303,
    part_name: "M17RJ Douglass",
    part_type: "mobility_base", // inverse chassis
    faction: "A",
    price: 23000
  },
  {
    part_id: 36,
    lang_id: 2331,
    part_name: "MSK-RJ400",
    part_type: "mobility_base", // inverse chassis
    faction: "B",
    price: 14500
  },
  {
    part_id: 37,
    lang_id: 2332,
    part_name: "MSK-RJ401",
    part_type: "mobility_base", // inverse chassis
    faction: "B",
    price: 16500
  },
  {
    part_id: 38,
    lang_id: 2361,
    part_name: "RJ-Jamal",
    part_type: "mobility_base", // inverse chassis
    faction: "C",
    price: 19000
  },
  {
    part_id: 39,
    lang_id: 2362,
    part_name: "RJ-Naqa",
    part_type: "mobility_base", // inverse chassis
    faction: "C",
    price: 20500
  },
  {
    part_id: 40,
    lang_id: 2601,
    part_name: "M04ML Grant",
    part_type: "mobility_base", // multi chassis
    faction: "A",
    price: 18000
  },
  {
    part_id: 41,
    lang_id: 2602,
    part_name: "M09ML Dupont",
    part_type: "mobility_base", // multi chassis
    faction: "A",
    price: 19500
  },
  {
    part_id: 42,
    lang_id: 2611,
    part_name: "M15ML Sharman",
    part_type: "mobility_base", // multi chassis
    faction: "A",
    price: 22000
  },
  {
    part_id: 43,
    lang_id: 2631,
    part_name: "MSK-ML200",
    part_type: "mobility_base", // multi chassis
    faction: "B",
    price: 16000
  },
  {
    part_id: 44,
    lang_id: 2632,
    part_name: "MSK-ML201",
    part_type: "mobility_base", // multi chassis
    faction: "B",
    price: 17500
  },
  {
    part_id: 45,
    lang_id: 2641,
    part_name: "MSK-ML210",
    part_type: "mobility_base", // multi chassis
    faction: "B",
    price: 19000
  },
  {
    part_id: 46,
    lang_id: 2642,
    part_name: "MSK-ML211",
    part_type: "mobility_base", // multi chassis
    faction: "B",
    price: 21500
  },
  {
    part_id: 47,
    lang_id: 2661,
    part_name: "ML-Thawr",
    part_type: "mobility_base", // multi chassis
    faction: "C",
    price: 23000
  },
  {
    part_id: 48,
    lang_id: 2662,
    part_name: "ML-Baqara",
    part_type: "mobility_base", // multi chassis
    faction: "C",
    price: 24500
  },
  {
    part_id: 49,
    lang_id: 2901,
    part_name: "M05CL Custer",
    part_type: "mobility_base", // treaded chassis
    faction: "A",
    price: 17000
  },
  {
    part_id: 50,
    lang_id: 2902,
    part_name: "M07CL Hooker",
    part_type: "mobility_base", // treaded chassis
    faction: "A",
    price: 18000
  },
  {
    part_id: 51,
    lang_id: 2903,
    part_name: "M14CL Meade",
    part_type: "mobility_base", // treaded chassis
    faction: "A",
    price: 19500
  },
  {
    part_id: 52,
    lang_id: 2931,
    part_name: "MSK-CL110",
    part_type: "mobility_base", // treaded chassis
    faction: "B",
    price: 17500
  },
  {
    part_id: 53,
    lang_id: 2932,
    part_name: "MSK-CL101",
    part_type: "mobility_base", // treaded chassis
    faction: "B",
    price: 19000
  },
  {
    part_id: 54,
    lang_id: 2933,
    part_name: "MSK-CL100",
    part_type: "mobility_base", // treaded chassis
    faction: "B",
    price: 21000
  },
  {
    part_id: 55,
    lang_id: 2961,
    part_name: "CL-Himar",
    part_type: "mobility_base", // treaded chassis
    faction: "C",
    price: 20000
  },
  {
    part_id: 56,
    lang_id: 2962,
    part_name: "CL-Baghl",
    part_type: "mobility_base", // treaded chassis
    faction: "C",
    price: 21500
  },
  {
    part_id: 57,
    lang_id: 3201,
    part_name: "M06HL Cushing",
    part_type: "mobility_base", // hover chassis
    faction: "A",
    price: 20500
  },
  {
    part_id: 58,
    lang_id: 3202,
    part_name: "M12HL Wells",
    part_type: "mobility_base", // hover chassis
    faction: "A",
    price: 21500
  },
  {
    part_id: 59,
    lang_id: 3231,
    part_name: "MSK-HL600",
    part_type: "mobility_base", // hover chassis
    faction: "B",
    price: 13000
  },
  {
    part_id: 60,
    lang_id: 3232,
    part_name: "MSK-HL601",
    part_type: "mobility_base", // hover chassis
    faction: "B",
    price: 13500
  },
  {
    part_id: 61,
    lang_id: 3261,
    part_name: "HL-Ghazal",
    part_type: "mobility_base", // hover chassis
    faction: "C",
    price: 19000
  },
  {
    part_id: 62,
    lang_id: 3262,
    part_name: "HL-Labua",
    part_type: "mobility_base", // hover chassis
    faction: "C",
    price: 20500
  },
  {
    part_id: 63,
    lang_id: 3263,
    part_name: "HL-Namir",
    part_type: "mobility_base", // hover chassis
    faction: "C",
    price: 22000
  },
  {
    part_id: 64,
    lang_id: 3264,
    part_name: "HL-Asad",
    part_type: "mobility_base", // hover chassis
    faction: "C",
    price: 24500
  },
  {
    part_id: 65,
    lang_id: 3501,
    part_name: "M02WL Grierson",
    part_type: "mobility_base", // wheeled chassis
    faction: "A",
    price: 16000
  },
  {
    part_id: 66,
    lang_id: 3502,
    part_name: "M11WL Sheridan",
    part_type: "mobility_base", // wheeled chassis
    faction: "A",
    price: 18000
  },
  {
    part_id: 67,
    lang_id: 3503,
    part_name: "M16WL Meagher",
    part_type: "mobility_base", // wheeled chassis
    faction: "A",
    price: 19500
  },
  {
    part_id: 68,
    lang_id: 3531,
    part_name: "MSK-WL300",
    part_type: "mobility_base", // wheeled chassis
    faction: "B",
    price: 15000
  },
  {
    part_id: 69,
    lang_id: 3532,
    part_name: "MSK-WL310",
    part_type: "mobility_base", // wheeled chassis
    faction: "B",
    price: 17000
  },
  {
    part_id: 70,
    lang_id: 3561,
    part_name: "WL-Hisan",
    part_type: "mobility_base", // wheeled chassis
    faction: "C",
    price: 18000
  },
  {
    part_id: 71,
    lang_id: 3562,
    part_name: "WL-Faras",
    part_type: "mobility_base", // wheeled chassis
    faction: "C",
    price: 19000
  },
  {
    part_id: 72,
    lang_id: 3563,
    part_name: "WL-Jawad",
    part_type: "mobility_base", // wheeled chassis
    faction: "C",
    price: 20000
  },
  {
    part_id: 73,
    lang_id: 3601,
    part_name: "RFZ-HL-1",
    part_type: "mobility_base", // hover chassis
    faction: "A",
    price: null
  },
  {
    part_id: 74,
    lang_id: 3602,
    part_name: "RFZ-HL-2",
    part_type: "mobility_base", // hover chassis
    faction: "A",
    price: null
  },
  {
    part_id: 75,
    lang_id: 3603,
    part_name: "RFZ-TL-1",
    part_type: "mobility_base", // bipedal chassis
    faction: "A",
    price: null
  },
  {
    part_id: 76,
    lang_id: 3604,
    part_name: "RFZ-TL-2",
    part_type: "mobility_base", // bipedal chassis
    faction: "A",
    price: null
  },
  {
    part_id: 77,
    lang_id: 3605,
    part_name: "RFZ-WL-1",
    part_type: "mobility_base", // wheeled chassis
    faction: "A",
    price: null
  },
  {
    part_id: 78,
    lang_id: 3606,
    part_name: "RFZ-WL-2",
    part_type: "mobility_base", // wheeled chassis
    faction: "A",
    price: null
  },
  {
    part_id: 79,
    lang_id: 3607,
    part_name: "RFZ-RJ-1",
    part_type: "mobility_base", // inverse chassis
    faction: "A",
    price: null
  },
  {
    part_id: 80,
    lang_id: 3608,
    part_name: "RFZ-RJ-2",
    part_type: "mobility_base", // inverse chassis
    faction: "A",
    price: null
  },
  {
    part_id: 81,
    lang_id: 3609,
    part_name: "RFZ-ML-1",
    part_type: "mobility_base", // multi chassis
    faction: "A",
    price: null
  },
  {
    part_id: 82,
    lang_id: 3610,
    part_name: "RFZ-ML-2",
    part_type: "mobility_base", // multi chassis
    faction: "A",
    price: null
  },
  {
    part_id: 83,
    lang_id: 3611,
    part_name: "RFZ-CL-1",
    part_type: "mobility_base", // treaded chassis
    faction: "A",
    price: null
  },
  {
    part_id: 84,
    lang_id: 3612,
    part_name: "RFZ-CL-2",
    part_type: "mobility_base", // treaded chassis
    faction: "A",
    price: null
  },
  {
    part_id: 85,
    lang_id: 3613,
    part_name: "RFZ-CL-X",
    part_type: "mobility_base", // treaded chassis
    faction: "A",
    price: null
  },
  {
    part_id: 86,
    lang_id: 3699,
    part_name: "Test myriapod",
    part_type: "mobility_base", // multi chassis
    faction: "C",
    price: null
  },
  {
    part_id: 87,
    lang_id: 4001,
    part_name: "M01G Papin",
    part_type: "generator",
    faction: "A",
    price: 15000
  },
  {
    part_id: 88,
    lang_id: 4002,
    part_name: "M04G Volta",
    part_type: "generator",
    faction: "A",
    price: 17000
  },
  {
    part_id: 89,
    lang_id: 4031,
    part_name: "MSK-G100",
    part_type: "generator",
    faction: "B",
    price: 12500
  },
  {
    part_id: 90,
    lang_id: 4032,
    part_name: "MSK-G101",
    part_type: "generator",
    faction: "B",
    price: 14500
  },
  {
    part_id: 91,
    lang_id: 4061,
    part_name: "G-Sal Kar",
    part_type: "generator",
    faction: "C",
    price: 17500
  },
  {
    part_id: 92,
    lang_id: 4062,
    part_name: "G-Zahara",
    part_type: "generator",
    faction: "C",
    price: 18500
  },
  {
    part_id: 93,
    lang_id: 4301,
    part_name: "M02G Franklin",
    part_type: "generator",
    faction: "A",
    price: 19000
  },
  {
    part_id: 94,
    lang_id: 4302,
    part_name: "M05G Young",
    part_type: "generator",
    faction: "A",
    price: 20500
  },
  {
    part_id: 95,
    lang_id: 4331,
    part_name: "MSK-G1000",
    part_type: "generator",
    faction: "B",
    price: 17500
  },
  {
    part_id: 96,
    lang_id: 4332,
    part_name: "MSK-G1500",
    part_type: "generator",
    faction: "B",
    price: 20500
  },
  {
    part_id: 97,
    lang_id: 4333,
    part_name: "MSK-G1501",
    part_type: "generator",
    faction: "B",
    price: null
  },
  {
    part_id: 98,
    lang_id: 4361,
    part_name: "G-Shajar",
    part_type: "generator",
    faction: "C",
    price: 21000
  },
  {
    part_id: 99,
    lang_id: 4601,
    part_name: "M03G Ampere",
    part_type: "generator",
    faction: "A",
    price: 19000
  },
  {
    part_id: 100,
    lang_id: 4602,
    part_name: "M06G Nobili",
    part_type: "generator",
    faction: "A",
    price: 21000
  },
  {
    part_id: 101,
    lang_id: 4631,
    part_name: "MSK-G10",
    part_type: "generator",
    faction: "B",
    price: 21000
  },
  {
    part_id: 102,
    lang_id: 4661,
    part_name: "G-Ushb",
    part_type: "generator",
    faction: "C",
    price: 20500
  },
  {
    part_id: 103,
    lang_id: 4662,
    part_name: "G-Kala",
    part_type: "generator",
    faction: "C",
    price: 22500
  },
  {
    part_id: 104,
    lang_id: 4663,
    part_name: "G-Saq",
    part_type: "generator",
    faction: "C",
    price: 24000
  },
  {
    part_id: 105,
    lang_id: 4701,
    part_name: "RFZ-GE-A1",
    part_type: "generator",
    faction: "A",
    price: null
  },
  {
    part_id: 106,
    lang_id: 4702,
    part_name: "RFZ-GE-A2",
    part_type: "generator",
    faction: "A",
    price: null
  },
  {
    part_id: 107,
    lang_id: 4703,
    part_name: "RFZ-GE-A3",
    part_type: "generator",
    faction: "A",
    price: null
  },
  {
    part_id: 108,
    lang_id: 4704,
    part_name: "RFZ-GE-A4",
    part_type: "generator",
    faction: "A",
    price: null
  },
  {
    part_id: 109,
    lang_id: 4705,
    part_name: "RFZ-GE-B1",
    part_type: "generator",
    faction: "B",
    price: null
  },
  {
    part_id: 110,
    lang_id: 4706,
    part_name: "RFZ-GE-B2",
    part_type: "generator",
    faction: "B",
    price: null
  },
  {
    part_id: 111,
    lang_id: 4707,
    part_name: "RFZ-GE-C1",
    part_type: "generator",
    faction: "C",
    price: null
  },
  {
    part_id: 112,
    lang_id: 5001,
    part_name: "M01AM Gauntlet",
    part_type: "assist_parts", // armor
    faction: "A",
    price: 3500
  },
  {
    part_id: 113,
    lang_id: 5002,
    part_name: "M02AM Vambrace",
    part_type: "assist_parts", // armor
    faction: "A",
    price: null
  },
  {
    part_id: 114,
    lang_id: 5003,
    part_name: "M04AM Couter",
    part_type: "assist_parts", // armor
    faction: "A",
    price: 4250
  },
  {
    part_id: 115,
    lang_id: 5011,
    part_name: "M03AM Greave",
    part_type: "assist_parts", // armor
    faction: "A",
    price: 4500
  },
  {
    part_id: 116,
    lang_id: 5012,
    part_name: "M05AM Poleyn",
    part_type: "assist_parts", // armor
    faction: "A",
    price: 5000
  },
  {
    part_id: 117,
    lang_id: 5031,
    part_name: "MSK-AM110",
    part_type: "assist_parts", // armor
    faction: "B",
    price: 2500
  },
  {
    part_id: 118,
    lang_id: 5032,
    part_name: "MSK-AM120",
    part_type: "assist_parts", // armor
    faction: "B",
    price: 2750
  },
  {
    part_id: 119,
    lang_id: 5033,
    part_name: "MSK-AM130",
    part_type: "assist_parts", // armor
    faction: "B",
    price: 3250
  },
  {
    part_id: 120,
    lang_id: 5034,
    part_name: "MSK-AM100",
    part_type: "assist_parts", // armor
    faction: "B",
    price: 3900
  },
  {
    part_id: 121,
    lang_id: 5041,
    part_name: "MSK-AM1000",
    part_type: "assist_parts", // armor
    faction: "B",
    price: 3000
  },
  {
    part_id: 122,
    lang_id: 5042,
    part_name: "MSK-AM1100",
    part_type: "assist_parts", // armor
    faction: "B",
    price: 3400
  },
  {
    part_id: 123,
    lang_id: 5043,
    part_name: "MSK-AM1200",
    part_type: "assist_parts", // armor
    faction: "B",
    price: 3900
  },
  {
    part_id: 124,
    lang_id: 5061,
    part_name: "AM-Dhahab",
    part_type: "assist_parts", // armor
    faction: "C",
    price: 3400
  },
  {
    part_id: 125,
    lang_id: 5062,
    part_name: "AM-Fidda",
    part_type: "assist_parts", // armor
    faction: "C",
    price: 3800
  },
  {
    part_id: 126,
    lang_id: 5063,
    part_name: "AM-Nuhas",
    part_type: "assist_parts", // armor
    faction: "C",
    price: 4000
  },
  {
    part_id: 127,
    lang_id: 5071,
    part_name: "AM-Hadid",
    part_type: "assist_parts", // armor
    faction: "C",
    price: 2800
  },
  {
    part_id: 128,
    lang_id: 5072,
    part_name: "AM-Safih",
    part_type: "assist_parts", // armor
    faction: "C",
    price: null
  },
  {
    part_id: 129,
    lang_id: 5101,
    part_name: "RFZ-AAM-1",
    part_type: "assist_parts", // armor
    faction: "A",
    price: null
  },
  {
    part_id: 130,
    lang_id: 5102,
    part_name: "RFZ-AAM-2",
    part_type: "assist_parts", // armor
    faction: "A",
    price: null
  },
  {
    part_id: 131,
    lang_id: 5103,
    part_name: "RFZ-AAM-3",
    part_type: "assist_parts", // armor
    faction: "A",
    price: null
  },
  {
    part_id: 132,
    lang_id: 6001,
    part_name: "M01RD Carnot",
    part_type: "assist_parts", // heat sink
    faction: "A",
    price: 2650
  },
  {
    part_id: 133,
    lang_id: 6002,
    part_name: "M02RD Kelvin",
    part_type: "assist_parts", // heat sink
    faction: "A",
    price: 2900
  },
  {
    part_id: 134,
    lang_id: 6031,
    part_name: "MSK-RD100",
    part_type: "assist_parts", // heat sink
    faction: "B",
    price: 3100
  },
  {
    part_id: 135,
    lang_id: 6032,
    part_name: "MSK-RD110",
    part_type: "assist_parts", // heat sink
    faction: "B",
    price: 3250
  },
  {
    part_id: 136,
    lang_id: 6033,
    part_name: "MSK-RD120",
    part_type: "assist_parts", // heat sink
    faction: "B",
    price: 3400
  },
  {
    part_id: 137,
    lang_id: 6061,
    part_name: "RD-Nahar",
    part_type: "assist_parts", // heat sink
    faction: "C",
    price: 3150
  },
  {
    part_id: 138,
    lang_id: 6062,
    part_name: "RD-Buhayra",
    part_type: "assist_parts", // heat sink
    faction: "C",
    price: 3250
  },
  {
    part_id: 139,
    lang_id: 6101,
    part_name: "RFZ-ARD-1",
    part_type: "assist_parts", // heat sink
    faction: "A",
    price: null
  },
  {
    part_id: 140,
    lang_id: 7001,
    part_name: "M01SP Born",
    part_type: "spacer",
    faction: "A",
    price: 5000
  },
  {
    part_id: 141,
    lang_id: 7002,
    part_name: "M05SP Chest",
    part_type: "spacer",
    faction: "A",
    price: 5000
  },
  {
    part_id: 142,
    lang_id: 7011,
    part_name: "M02SP Abdomen",
    part_type: "spacer",
    faction: "A",
    price: 2500
  },
  {
    part_id: 143,
    lang_id: 7012,
    part_name: "M04SP Finger",
    part_type: "spacer",
    faction: "A",
    price: null
  },
  {
    part_id: 144,
    lang_id: 7021,
    part_name: "M03SP Neck",
    part_type: "spacer",
    faction: "A",
    price: 2500
  },
  {
    part_id: 145,
    lang_id: 7022,
    part_name: "M06SP Arm",
    part_type: "spacer",
    faction: "A",
    price: 2500
  },
  {
    part_id: 146,
    lang_id: 7031,
    part_name: "MSK-SP200",
    part_type: "spacer",
    faction: "B",
    price: 5000
  },
  {
    part_id: 147,
    lang_id: 7032,
    part_name: "MSK-SP400",
    part_type: "spacer",
    faction: "B",
    price: 2500
  },
  {
    part_id: 148,
    lang_id: 7041,
    part_name: "MSK-SP100",
    part_type: "spacer",
    faction: "B",
    price: 2500
  },
  {
    part_id: 149,
    lang_id: 7042,
    part_name: "MSK-SP300",
    part_type: "spacer",
    faction: "B",
    price: null
  },
  {
    part_id: 150,
    lang_id: 7051,
    part_name: "MSK-SP500",
    part_type: "spacer",
    faction: "B",
    price: 2500
  },
  {
    part_id: 151,
    lang_id: 7052,
    part_name: "MSK-SP600",
    part_type: "spacer",
    faction: "B",
    price: null
  },
  {
    part_id: 152,
    lang_id: 7061,
    part_name: "SP-Dhira",
    part_type: "spacer",
    faction: "C",
    price: 2500
  },
  {
    part_id: 153,
    lang_id: 7062,
    part_name: "SP-Rijil",
    part_type: "spacer",
    faction: "C",
    price: null
  },
  {
    part_id: 154,
    lang_id: 7071,
    part_name: "SP-Sadr",
    part_type: "spacer",
    faction: "C",
    price: null
  },
  {
    part_id: 155,
    lang_id: 7072,
    part_name: "SP-Zahr",
    part_type: "spacer",
    faction: "C",
    price: 2500
  },
  {
    part_id: 156,
    lang_id: 7081,
    part_name: "SP-Yad",
    part_type: "spacer",
    faction: "C",
    price: 2500
  },
  {
    part_id: 157,
    lang_id: 7082,
    part_name: "SP-Isba",
    part_type: "spacer",
    faction: "C",
    price: 2500
  },
  {
    part_id: 158,
    lang_id: 7101,
    part_name: "RFZ-ASP-1",
    part_type: "spacer",
    faction: "A",
    price: null
  },
  {
    part_id: 159,
    lang_id: 7102,
    part_name: "RFZ-ASP-2",
    part_type: "spacer",
    faction: "A",
    price: null
  },
  {
    part_id: 160,
    lang_id: 7103,
    part_name: "RFZ-ASP-3",
    part_type: "spacer",
    faction: "A",
    price: null
  },
  {
    part_id: 161,
    lang_id: 8001,
    part_name: "M01FS Boyle",
    part_type: "assist_parts", // fuel tank
    faction: "A",
    price: 1750
  },
  {
    part_id: 162,
    lang_id: 8002,
    part_name: "M02FS Charles",
    part_type: "assist_parts", // fuel tank
    faction: "A",
    price: 2000
  },
  {
    part_id: 163,
    lang_id: 8031,
    part_name: "MSK-FS100",
    part_type: "assist_parts", // fuel tank
    faction: "B",
    price: 2500
  },
  {
    part_id: 164,
    lang_id: 8032,
    part_name: "MSK-FS101",
    part_type: "assist_parts", // fuel tank
    faction: "B",
    price: 2750
  },
  {
    part_id: 165,
    lang_id: 8061,
    part_name: "FS-Halib",
    part_type: "assist_parts", // fuel tank
    faction: "C",
    price: 2000
  },
  {
    part_id: 166,
    lang_id: 8062,
    part_name: "FS-Zabadi",
    part_type: "assist_parts", // fuel tank
    faction: "C",
    price: 2250
  },
  {
    part_id: 167,
    lang_id: 8101,
    part_name: "RFZ-AFS-1",
    part_type: "assist_parts", // fuel tank
    faction: "A",
    price: null
  },
  {
    part_id: 168,
    lang_id: 9001,
    part_name: "M01RC Cayley",
    part_type: "assist_parts", // rotorcraft
    faction: "A",
    price: 4750
  },
  {
    part_id: 169,
    lang_id: 9002,
    part_name: "M02RC Wright",
    part_type: "assist_parts", // rotorcraft
    faction: "A",
    price: 5750
  },
  {
    part_id: 170,
    lang_id: 9031,
    part_name: "MSK-RC100",
    part_type: "assist_parts", // rotorcraft
    faction: "B",
    price: 5000
  },
  {
    part_id: 171,
    lang_id: 9061,
    part_name: "RC-Sununu",
    part_type: "assist_parts", // rotorcraft
    faction: "C",
    price: 4500
  },
  {
    part_id: 172,
    lang_id: 9062,
    part_name: "RC-Nasr",
    part_type: "assist_parts", // rotorcraft
    faction: "C",
    price: 6000
  },
  {
    part_id: 173,
    lang_id: 9063,
    part_name: "RC-Saqr",
    part_type: "assist_parts", // rotorcraft
    faction: "C",
    price: 6500
  },
  {
    part_id: 174,
    lang_id: 9064,
    part_name: "RC-Tawus",
    part_type: "assist_parts", // rotorcraft
    faction: "C",
    price: 7250
  },
  {
    part_id: 175,
    lang_id: 9101,
    part_name: "RFZ-ARC-1",
    part_type: "assist_parts", // rotorcraft
    faction: "A",
    price: null
  },
  {
    part_id: 176,
    lang_id: 10001,
    part_name: "M03SD Kepler",
    part_type: "assist_parts", // sensors
    faction: "A",
    price: 6500
  },
  {
    part_id: 177,
    lang_id: 10002,
    part_name: "M01SD Huygens",
    part_type: "assist_parts", // sensors
    faction: "A",
    price: 7000
  },
  {
    part_id: 178,
    lang_id: 10003,
    part_name: "M02SD Faraday",
    part_type: "assist_parts", // sensors
    faction: "A",
    price: 7250
  },
  {
    part_id: 179,
    lang_id: 10031,
    part_name: "MSK-SD110",
    part_type: "assist_parts", // sensors
    faction: "B",
    price: 6000
  },
  {
    part_id: 180,
    lang_id: 10032,
    part_name: "MSK-SD111",
    part_type: "assist_parts", // sensors
    faction: "B",
    price: 6750
  },
  {
    part_id: 181,
    lang_id: 10033,
    part_name: "MSK-SD100",
    part_type: "assist_parts", // sensors
    faction: "B",
    price: 7000
  },
  {
    part_id: 182,
    lang_id: 10061,
    part_name: "SD-Anf",
    part_type: "assist_parts", // sensors
    faction: "C",
    price: 8000
  },
  {
    part_id: 183,
    lang_id: 10062,
    part_name: "SD-Udhun",
    part_type: "assist_parts", // sensors
    faction: "C",
    price: 7500
  },
  {
    part_id: 184,
    lang_id: 10063,
    part_name: "SD-Ayn",
    part_type: "assist_parts", // sensors
    faction: "C",
    price: 7750
  },
  {
    part_id: 185,
    lang_id: 10101,
    part_name: "RFZ-ASD-N1",
    part_type: "assist_parts", // sensors
    faction: "A",
    price: null
  },
  {
    part_id: 186,
    lang_id: 10102,
    part_name: "RFZ-ASD-S1",
    part_type: "assist_parts", // sensors
    faction: "A",
    price: null
  },
  {
    part_id: 187,
    lang_id: 10103,
    part_name: "RFZ-ASD-M1",
    part_type: "assist_parts", // sensors
    faction: "A",
    price: null
  },
  {
    part_id: 188,
    lang_id: 11001,
    part_name: "M01MC Shield",
    part_type: "assist_parts", // missile counter
    faction: "A",
    price: 6500
  },
  {
    part_id: 189,
    lang_id: 11002,
    part_name: "M02MC Bucker",
    part_type: "assist_parts", // missile counter
    faction: "A",
    price: 6000
  },
  {
    part_id: 190,
    lang_id: 11031,
    part_name: "MSK-MC100",
    part_type: "assist_parts", // missile counter
    faction: "B",
    price: 7000
  },
  {
    part_id: 191,
    lang_id: 11032,
    part_name: "MSK-MC200",
    part_type: "assist_parts", // missile counter
    faction: "B",
    price: 6750
  },
  {
    part_id: 192,
    lang_id: 11061,
    part_name: "MS-Rih",
    part_type: "assist_parts", // missile counter
    faction: "C",
    price: 7500
  },
  {
    part_id: 193,
    lang_id: 11101,
    part_name: "RFZ-AMS-1",
    part_type: "assist_parts", // missile counter
    faction: "A",
    price: null
  },
  {
    part_id: 194,
    lang_id: 12001,
    part_name: "M01JM Sallet",
    part_type: "assist_parts", // na jammer
    faction: "A",
    price: 4500
  },
  {
    part_id: 195,
    lang_id: 12002,
    part_name: "M02JM Basinet",
    part_type: "assist_parts", // na jammer
    faction: "A",
    price: 5000
  },
  {
    part_id: 196,
    lang_id: 12031,
    part_name: "MSK-JM100",
    part_type: "assist_parts", // na jammer
    faction: "B",
    price: 4250
  },
  {
    part_id: 197,
    lang_id: 12061,
    part_name: "JM-Barq",
    part_type: "assist_parts", // na jammer
    faction: "C",
    price: 4000
  },
  {
    part_id: 198,
    lang_id: 12062,
    part_name: "JM-Saiqa",
    part_type: "assist_parts", // na jammer
    faction: "C",
    price: 4500
  },
  {
    part_id: 199,
    lang_id: 12063,
    part_name: "JM-Rad",
    part_type: "assist_parts", // na jammer
    faction: "C",
    price: 5250
  },
  {
    part_id: 200,
    lang_id: 12101,
    part_name: "RFZ-AJM-1",
    part_type: "assist_parts", // na jammer
    faction: "A",
    price: null
  },
  {
    part_id: 201,
    lang_id: 13001,
    part_name: "M01NM Morse",
    part_type: "na_marker",
    faction: "A",
    price: 12500
  },
  {
    part_id: 202,
    lang_id: 13002,
    part_name: "M02NM Bell",
    part_type: "na_marker",
    faction: "A",
    price: 14000
  },
  {
    part_id: 203,
    lang_id: 13003,
    part_name: "M03NM Hertz",
    part_type: "na_marker",
    faction: "A",
    price: 15000
  },
  {
    part_id: 204,
    lang_id: 13004,
    part_name: "M04NM Maxwell",
    part_type: "na_marker",
    faction: "A",
    price: 16500
  },
  {
    part_id: 205,
    lang_id: 13031,
    part_name: "MSK-NM1000",
    part_type: "na_marker",
    faction: "B",
    price: 15000
  },
  {
    part_id: 206,
    lang_id: 13032,
    part_name: "MSK-NM1500",
    part_type: "na_marker",
    faction: "B",
    price: 16000
  },
  {
    part_id: 207,
    lang_id: 13033,
    part_name: "MSK-NM2000",
    part_type: "na_marker",
    faction: "B",
    price: 18000
  },
  {
    part_id: 208,
    lang_id: 13034,
    part_name: "MSK-NM2500",
    part_type: "na_marker",
    faction: "B",
    price: 20000
  },
  {
    part_id: 209,
    lang_id: 13061,
    part_name: "NM-Alkawn",
    part_type: "na_marker",
    faction: "C",
    price: 16500
  },
  {
    part_id: 210,
    lang_id: 13062,
    part_name: "NM-Ashshams",
    part_type: "na_marker",
    faction: "C",
    price: 18500
  },
  {
    part_id: 211,
    lang_id: 13063,
    part_name: "NM-Najm",
    part_type: "na_marker",
    faction: "C",
    price: 20000
  },
  {
    part_id: 212,
    lang_id: 13064,
    part_name: "NM-Kawkab",
    part_type: "na_marker",
    faction: "C",
    price: 21000
  },
  {
    part_id: 213,
    lang_id: 13101,
    part_name: "RFZ-NM-1",
    part_type: "na_marker",
    faction: "A",
    price: null
  },
  {
    part_id: 214,
    lang_id: 13102,
    part_name: "RFZ-NM-2",
    part_type: "na_marker",
    faction: "A",
    price: null
  },
  {
    part_id: 215,
    lang_id: 13103,
    part_name: "RFZ-NM-3",
    part_type: "na_marker",
    faction: "A",
    price: null
  },
  {
    part_id: 216,
    lang_id: 14001,
    part_name: "M16HC Bastard",
    part_type: "heavy_arms", // huge cannon
    faction: "A",
    price: 11000
  },
  {
    part_id: 217,
    lang_id: 14002,
    part_name: "M25HC Gram",
    part_type: "heavy_arms", // huge cannon
    faction: "A",
    price: 13000
  },
  {
    part_id: 218,
    lang_id: 14031,
    part_name: "MSK-HC1000/O",
    part_type: "heavy_arms", // huge cannon
    faction: "B",
    price: 12500
  },
  {
    part_id: 219,
    lang_id: 14032,
    part_name: "MSK-HC1001/O",
    part_type: "heavy_arms", // huge cannon
    faction: "B",
    price: 15000
  },
  {
    part_id: 220,
    lang_id: 14033,
    part_name: "MSK-HC1500/D",
    part_type: "heavy_arms", // huge cannon
    faction: "B",
    price: 16500
  },
  {
    part_id: 221,
    lang_id: 14034,
    part_name: "MSK-HC1501/D",
    part_type: "heavy_arms", // huge cannon
    faction: "B",
    price: null
  },
  {
    part_id: 222,
    lang_id: 14061,
    part_name: "HCn-Asifa",
    part_type: "heavy_arms", // huge cannon
    faction: "C",
    price: 15000
  },
  {
    part_id: 223,
    lang_id: 14101,
    part_name: "RFZ-WHC-1",
    part_type: "heavy_arms", // huge cannon
    faction: "A",
    price: null
  },
  {
    part_id: 224,
    lang_id: 15001,
    part_name: "M01CN Falchion",
    part_type: "light_arms", // cannon
    faction: "A",
    price: 6000
  },
  {
    part_id: 225,
    lang_id: 15002,
    part_name: "M20CN Anelace",
    part_type: "light_arms", // cannon
    faction: "A",
    price: 6750
  },
  {
    part_id: 226,
    lang_id: 15003,
    part_name: "M27CN Flanberg",
    part_type: "light_arms", // cannon
    faction: "A",
    price: null
  },
  {
    part_id: 227,
    lang_id: 15031,
    part_name: "MSK-CN100",
    part_type: "light_arms", // cannon
    faction: "B",
    price: 6750
  },
  {
    part_id: 228,
    lang_id: 15032,
    part_name: "MSK-CN200",
    part_type: "light_arms", // cannon
    faction: "B",
    price: 7000
  },
  {
    part_id: 229,
    lang_id: 15033,
    part_name: "MSK-CN201",
    part_type: "light_arms", // cannon
    faction: "B",
    price: 7500
  },
  {
    part_id: 230,
    lang_id: 15034,
    part_name: "MSK-CN300",
    part_type: "light_arms", // cannon
    faction: "B",
    price: 9000
  },
  {
    part_id: 231,
    lang_id: 15061,
    part_name: "Cnn-Fasuliya",
    part_type: "light_arms", // cannon
    faction: "C",
    price: 6500
  },
  {
    part_id: 232,
    lang_id: 15062,
    part_name: "Cnn-Bisilla",
    part_type: "light_arms", // cannon
    faction: "C",
    price: 8000
  },
  {
    part_id: 233,
    lang_id: 15101,
    part_name: "RFZ-WCN-1",
    part_type: "light_arms", // cannon
    faction: "A",
    price: null
  },
  {
    part_id: 234,
    lang_id: 15102,
    part_name: "RFZ-WCN-2",
    part_type: "light_arms", // cannon
    faction: "A",
    price: null
  },
  {
    part_id: 235,
    lang_id: 16001,
    part_name: "M02HW Espadon",
    part_type: "light_arms", // howitzer
    faction: "A",
    price: 6750
  },
  {
    part_id: 236,
    lang_id: 16002,
    part_name: "M21HW Faus",
    part_type: "light_arms", // howitzer
    faction: "A",
    price: 7500
  },
  {
    part_id: 237,
    lang_id: 16003,
    part_name: "M28HW Pallasch",
    part_type: "light_arms", // howitzer
    faction: "A",
    price: 8500
  },
  {
    part_id: 238,
    lang_id: 16031,
    part_name: "MSK-HW100",
    part_type: "light_arms", // howitzer
    faction: "B",
    price: 8000
  },
  {
    part_id: 239,
    lang_id: 16032,
    part_name: "MSK-HW200",
    part_type: "light_arms", // howitzer
    faction: "B",
    price: null
  },
  {
    part_id: 240,
    lang_id: 16033,
    part_name: "MSK-HW300",
    part_type: "light_arms", // howitzer
    faction: "B",
    price: 10000
  },
  {
    part_id: 241,
    lang_id: 16061,
    part_name: "Hwz-Matar",
    part_type: "light_arms", // howitzer
    faction: "C",
    price: 8500
  },
  {
    part_id: 242,
    lang_id: 16062,
    part_name: "Hwz-Thalj",
    part_type: "light_arms", // howitzer
    faction: "C",
    price: 9500
  },
  {
    part_id: 243,
    lang_id: 16063,
    part_name: "Hwz-Ghayma",
    part_type: "light_arms", // howitzer
    faction: "C",
    price: 10500
  },
  {
    part_id: 244,
    lang_id: 16101,
    part_name: "RFZ-WHW-1",
    part_type: "light_arms", // howitzer
    faction: "A",
    price: null
  },
  {
    part_id: 245,
    lang_id: 16102,
    part_name: "RFZ-WHW-2",
    part_type: "light_arms", // howitzer
    faction: "A",
    price: null
  },
  {
    part_id: 246,
    lang_id: 17001,
    part_name: "M03MT Dusack",
    part_type: "light_arms", // mortar
    faction: "A",
    price: 5000
  },
  {
    part_id: 247,
    lang_id: 17002,
    part_name: "M31MT Falcata",
    part_type: "light_arms", // mortar
    faction: "A",
    price: 6500
  },
  {
    part_id: 248,
    lang_id: 17031,
    part_name: "MSK-MT10",
    part_type: "light_arms", // mortar
    faction: "B",
    price: 5500
  },
  {
    part_id: 249,
    lang_id: 17032,
    part_name: "MSK-MT20",
    part_type: "light_arms", // mortar
    faction: "B",
    price: 6750
  },
  {
    part_id: 250,
    lang_id: 17033,
    part_name: "MSK-MT21",
    part_type: "light_arms", // mortar
    faction: "B",
    price: null
  },
  {
    part_id: 251,
    lang_id: 17061,
    part_name: "Mtr-Qamh",
    part_type: "light_arms", // mortar
    faction: "C",
    price: 5500
  },
  {
    part_id: 252,
    lang_id: 17062,
    part_name: "Mtr-Hinta",
    part_type: "light_arms", // mortar
    faction: "C",
    price: 6500
  },
  {
    part_id: 253,
    lang_id: 17063,
    part_name: "Mtr-Shair",
    part_type: "light_arms", // mortar
    faction: "C",
    price: 7000
  },
  {
    part_id: 254,
    lang_id: 17101,
    part_name: "RFZ-WMT-1",
    part_type: "light_arms", // mortar
    faction: "A",
    price: null
  },
  {
    part_id: 255,
    lang_id: 17102,
    part_name: "RFZ-WMT-2",
    part_type: "light_arms", // mortar
    faction: "A",
    price: null
  },
  {
    part_id: 256,
    lang_id: 17103,
    part_name: "RFZ-WMT-3",
    part_type: "light_arms", // mortar
    faction: "A",
    price: null
  },
  {
    part_id: 257,
    lang_id: 18001,
    part_name: "M04SC Epee",
    part_type: "light_arms", // sniper cannon
    faction: "A",
    price: 9000
  },
  {
    part_id: 258,
    lang_id: 18002,
    part_name: "M22SC Fleuret",
    part_type: "light_arms", // sniper cannon
    faction: "A",
    price: 11000
  },
  {
    part_id: 259,
    lang_id: 18003,
    part_name: "M36SC Sabre",
    part_type: "light_arms", // sniper cannon
    faction: "A",
    price: null
  },
  {
    part_id: 260,
    lang_id: 18031,
    part_name: "MSK-SC100",
    part_type: "light_arms", // sniper cannon
    faction: "B",
    price: 11000
  },
  {
    part_id: 261,
    lang_id: 18032,
    part_name: "MSK-SC200",
    part_type: "light_arms", // sniper cannon
    faction: "B",
    price: 13000
  },
  {
    part_id: 262,
    lang_id: 18061,
    part_name: "SpC-Himmis",
    part_type: "light_arms", // sniper cannon
    faction: "C",
    price: 12000
  },
  {
    part_id: 263,
    lang_id: 18101,
    part_name: "RFZ-WSC-1",
    part_type: "light_arms", // sniper cannon
    faction: "A",
    price: null
  },
  {
    part_id: 264,
    lang_id: 19001,
    part_name: "M05SR Estoc",
    part_type: "light_arms", // sniper rifle
    faction: "A",
    price: 7000
  },
  {
    part_id: 265,
    lang_id: 19002,
    part_name: "M17SR Tuck",
    part_type: "light_arms", // sniper rifle
    faction: "A",
    price: 8000
  },
  {
    part_id: 266,
    lang_id: 19003,
    part_name: "M35SR Rapir",
    part_type: "light_arms", // sniper rifle
    faction: "A",
    price: null
  },
  {
    part_id: 267,
    lang_id: 19031,
    part_name: "MSK-SR100",
    part_type: "light_arms", // sniper rifle
    faction: "B",
    price: 8000
  },
  {
    part_id: 268,
    lang_id: 19032,
    part_name: "MSK-SR200",
    part_type: "light_arms", // sniper rifle
    faction: "B",
    price: 10000
  },
  {
    part_id: 269,
    lang_id: 19061,
    part_name: "SpR-Aruzz",
    part_type: "light_arms", // sniper rifle
    faction: "C",
    price: 5000
  },
  {
    part_id: 270,
    lang_id: 19062,
    part_name: "SpR-Ruzz",
    part_type: "light_arms", // sniper rifle
    faction: "C",
    price: 4000
  },
  {
    part_id: 271,
    lang_id: 19101,
    part_name: "RFZ-WSR-1",
    part_type: "light_arms", // sniper rifle
    faction: "A",
    price: null
  },
  {
    part_id: 272,
    lang_id: 19102,
    part_name: "RFZ-WSR-2",
    part_type: "light_arms", // sniper rifle
    faction: "A",
    price: null
  },
  {
    part_id: 273,
    lang_id: 20001,
    part_name: "M06AR Baselard",
    part_type: "light_arms", // assault rifle
    faction: "A",
    price: 6000
  },
  {
    part_id: 274,
    lang_id: 20002,
    part_name: "M19AR Cutlass",
    part_type: "light_arms", // assault rifle
    faction: "A",
    price: 6500
  },
  {
    part_id: 275,
    lang_id: 20003,
    part_name: "M34AR Hanger",
    part_type: "light_arms", // assault rifle
    faction: "A",
    price: null
  },
  {
    part_id: 276,
    lang_id: 20031,
    part_name: "MSK-AR100",
    part_type: "light_arms", // assault rifle
    faction: "B",
    price: 6750
  },
  {
    part_id: 277,
    lang_id: 20032,
    part_name: "MSK-AR200",
    part_type: "light_arms", // assault rifle
    faction: "B",
    price: 7500
  },
  {
    part_id: 278,
    lang_id: 20061,
    part_name: "AsR-Thuban",
    part_type: "light_arms", // assault rifle
    faction: "C",
    price: 6500
  },
  {
    part_id: 279,
    lang_id: 20062,
    part_name: "AsR-Timsah",
    part_type: "light_arms", // assault rifle
    faction: "C",
    price: 7000
  },
  {
    part_id: 280,
    lang_id: 20101,
    part_name: "RFZ-WAR-1",
    part_type: "light_arms", // assault rifle
    faction: "A",
    price: null
  },
  {
    part_id: 281,
    lang_id: 20131,
    part_name: "RFZ-WAR-3",
    part_type: "light_arms", // assault rifle
    faction: "B",
    price: null
  },
  {
    part_id: 282,
    lang_id: 20161,
    part_name: "RFZ-WAR-2",
    part_type: "light_arms", // assault rifle
    faction: "C",
    price: null
  },
  {
    part_id: 283,
    lang_id: 21001,
    part_name: "M18MG Stylet",
    part_type: "light_arms", // machine gun
    faction: "A",
    price: 6500
  },
  {
    part_id: 284,
    lang_id: 21002,
    part_name: "M07MG Dagger",
    part_type: "light_arms", // machine gun
    faction: "A",
    price: 8000
  },
  {
    part_id: 285,
    lang_id: 21031,
    part_name: "MSK-MG100",
    part_type: "light_arms", // machine gun
    faction: "B",
    price: 6750
  },
  {
    part_id: 286,
    lang_id: 21061,
    part_name: "Mcg-Hamama",
    part_type: "light_arms", // machine gun
    faction: "C",
    price: 5500
  },
  {
    part_id: 287,
    lang_id: 21062,
    part_name: "Mcg-Hajal",
    part_type: "light_arms", // machine gun
    faction: "C",
    price: null
  },
  {
    part_id: 288,
    lang_id: 21101,
    part_name: "RFZ-WMG-1",
    part_type: "light_arms", // machine gun
    faction: "A",
    price: null
  },
  {
    part_id: 289,
    lang_id: 21102,
    part_name: "RFZ-WMG-2",
    part_type: "light_arms", // machine gun
    faction: "A",
    price: null
  },
  {
    part_id: 290,
    lang_id: 21103,
    part_name: "RFZ-WMG-3",
    part_type: "light_arms", // machine gun
    faction: "A",
    price: null
  },
  {
    part_id: 291,
    lang_id: 22001,
    part_name: "M08SG Club",
    part_type: "light_arms", // shotgun
    faction: "A",
    price: 8000
  },
  {
    part_id: 292,
    lang_id: 22002,
    part_name: "M24SG Mace",
    part_type: "light_arms", // shotgun
    faction: "A",
    price: 8500
  },
  {
    part_id: 293,
    lang_id: 22031,
    part_name: "MSK-SG100",
    part_type: "light_arms", // shotgun
    faction: "B",
    price: 9000
  },
  {
    part_id: 294,
    lang_id: 22032,
    part_name: "MSK-SG200/D",
    part_type: "light_arms", // shotgun
    faction: "B",
    price: 11500
  },
  {
    part_id: 295,
    lang_id: 22033,
    part_name: "MSK-SG101",
    part_type: "light_arms", // shotgun
    faction: "B",
    price: 10000
  },
  {
    part_id: 296,
    lang_id: 22061,
    part_name: "Stg-Burum",
    part_type: "light_arms", // shotgun
    faction: "C",
    price: 8000
  },
  {
    part_id: 297,
    lang_id: 22101,
    part_name: "RFZ-WSG-1",
    part_type: "light_arms", // shotgun
    faction: "A",
    price: null
  },
  {
    part_id: 298,
    lang_id: 22102,
    part_name: "RFZ-WSG-2",
    part_type: "light_arms", // shotgun
    faction: "A",
    price: null
  },
  {
    part_id: 299,
    lang_id: 23001,
    part_name: "M09GL Adze",
    part_type: "light_arms", // grenade
    faction: "A",
    price: 5000
  },
  {
    part_id: 300,
    lang_id: 23002,
    part_name: "M30GL Axe",
    part_type: "light_arms", // grenade
    faction: "A",
    price: 5500
  },
  {
    part_id: 301,
    lang_id: 23031,
    part_name: "MSK-GL10",
    part_type: "light_arms", // grenade
    faction: "B",
    price: 6750
  },
  {
    part_id: 302,
    lang_id: 23061,
    part_name: "Grl-Mushmis",
    part_type: "light_arms", // grenade
    faction: "C",
    price: 4500
  },
  {
    part_id: 303,
    lang_id: 23062,
    part_name: "Grl-Ghaim",
    part_type: "light_arms", // grenade
    faction: "C",
    price: null
  },
  {
    part_id: 304,
    lang_id: 23063,
    part_name: "Grl-Mumtir",
    part_type: "light_arms", // grenade
    faction: "C",
    price: 6500
  },
  {
    part_id: 305,
    lang_id: 23101,
    part_name: "RFZ-WGL-1",
    part_type: "light_arms", // grenade
    faction: "A",
    price: null
  },
  {
    part_id: 306,
    lang_id: 24001,
    part_name: "M09HT Spear",
    part_type: "light_arms", // heat rocket
    faction: "A",
    price: 8000
  },
  {
    part_id: 307,
    lang_id: 24002,
    part_name: "M33HT Partisan",
    part_type: "light_arms", // heat rocket
    faction: "A",
    price: 9000
  },
  {
    part_id: 308,
    lang_id: 24031,
    part_name: "MSK-HT10",
    part_type: "light_arms", // heat rocket
    faction: "B",
    price: 7000
  },
  {
    part_id: 309,
    lang_id: 24061,
    part_name: "HTR-Jazar",
    part_type: "light_arms", // heat rocket
    faction: "C",
    price: 8000
  },
  {
    part_id: 310,
    lang_id: 24062,
    part_name: "HTR-Khiyar",
    part_type: "light_arms", // heat rocket
    faction: "C",
    price: 9500
  },
  {
    part_id: 311,
    lang_id: 24063,
    part_name: "HTR-Tamatim",
    part_type: "light_arms", // heat rocket
    faction: "C",
    price: null
  },
  {
    part_id: 312,
    lang_id: 24101,
    part_name: "RFZ-WHT-1",
    part_type: "light_arms", // heat rocket
    faction: "A",
    price: null
  },
  {
    part_id: 313,
    lang_id: 24102,
    part_name: "RFZ-WHT-2",
    part_type: "light_arms", // heat rocket
    faction: "A",
    price: null
  },
  {
    part_id: 314,
    lang_id: 25001,
    part_name: "M10HP Lance",
    part_type: "light_arms", // anti hound pile
    faction: "A",
    price: 11000
  },
  {
    part_id: 315,
    lang_id: 25002,
    part_name: "M32HP Ballista",
    part_type: "light_arms", // anti hound pile
    faction: "A",
    price: 12500
  },
  {
    part_id: 316,
    lang_id: 25031,
    part_name: "MSK-HP100",
    part_type: "light_arms", // anti hound pile
    faction: "B",
    price: 14000
  },
  {
    part_id: 317,
    lang_id: 25061,
    part_name: "AHP-Ras",
    part_type: "light_arms", // anti hound pile
    faction: "C",
    price: 10000
  },
  {
    part_id: 318,
    lang_id: 25062,
    part_name: "AHP-Sharib",
    part_type: "light_arms", // anti hound pile
    faction: "C",
    price: null
  },
  {
    part_id: 319,
    lang_id: 25063,
    part_name: "AHP-Lihya",
    part_type: "light_arms", // anti hound pile
    faction: "C",
    price: 13000
  },
  {
    part_id: 320,
    lang_id: 25101,
    part_name: "RFZ-WHP-1",
    part_type: "light_arms", // anti hound pile
    faction: "A",
    price: null
  },
  {
    part_id: 321,
    lang_id: 26001,
    part_name: "M11LM Claymore",
    part_type: "light_arms", // land mine
    faction: "A",
    price: 7500
  },
  {
    part_id: 322,
    lang_id: 26031,
    part_name: "MSK-LM100",
    part_type: "light_arms", // land mine
    faction: "B",
    price: 6500
  },
  {
    part_id: 323,
    lang_id: 26032,
    part_name: "MSK-LM200",
    part_type: "light_arms", // land mine
    faction: "B",
    price: 7000
  },
  {
    part_id: 324,
    lang_id: 26061,
    part_name: "LdM-Harshafa",
    part_type: "light_arms", // land mine
    faction: "C",
    price: 8000
  },
  {
    part_id: 325,
    lang_id: 26062,
    part_name: "LdM-Zinifa",
    part_type: "light_arms", // land mine
    faction: "C",
    price: 7500
  },
  {
    part_id: 326,
    lang_id: 26063,
    part_name: "LdM-Lahm",
    part_type: "light_arms", // land mine
    faction: "C",
    price: 8750
  },
  {
    part_id: 327,
    lang_id: 26101,
    part_name: "RFZ-WLM-1",
    part_type: "light_arms", // land mine
    faction: "A",
    price: null
  },
  {
    part_id: 328,
    lang_id: 26102,
    part_name: "RFZ-WLM-2",
    part_type: "light_arms", // land mine
    faction: "A",
    price: null
  },
  {
    part_id: 329,
    lang_id: 27001,
    part_name: "M12BD Gladius",
    part_type: "light_arms", // bomb dispenser
    faction: "A",
    price: 7000
  },
  {
    part_id: 330,
    lang_id: 27002,
    part_name: "M23BD Walloon",
    part_type: "light_arms", // bomb dispenser
    faction: "A",
    price: 7500
  },
  {
    part_id: 331,
    lang_id: 27031,
    part_name: "MSK-BD100",
    part_type: "light_arms", // bomb dispenser
    faction: "B",
    price: 8000
  },
  {
    part_id: 332,
    lang_id: 27061,
    part_name: "BmD-Sardin",
    part_type: "light_arms", // bomb dispenser
    faction: "C",
    price: 8250
  },
  {
    part_id: 333,
    lang_id: 27062,
    part_name: "BmD-Salmun",
    part_type: "light_arms", // bomb dispenser
    faction: "C",
    price: 8500
  },
  {
    part_id: 334,
    lang_id: 27063,
    part_name: "BmD-Samakumusa",
    part_type: "light_arms", // bomb dispenser
    faction: "C",
    price: 9000
  },
  {
    part_id: 335,
    lang_id: 27064,
    part_name: "BmD-Sadaf",
    part_type: "light_arms", // bomb dispenser
    faction: "C",
    price: 8750
  },
  {
    part_id: 336,
    lang_id: 27101,
    part_name: "RFZ-WBD-1",
    part_type: "light_arms", // bomb dispenser
    faction: "A",
    price: null
  },
  {
    part_id: 337,
    lang_id: 27161,
    part_name: "RFZ-WBD-2",
    part_type: "light_arms", // bomb dispenser
    faction: "C",
    price: null
  },
  {
    part_id: 338,
    lang_id: 28002,
    part_name: "M13RL Halberd",
    part_type: "light_arms", // rocket
    faction: "A",
    price: 11500
  },
  {
    part_id: 339,
    lang_id: 28033,
    part_name: "MSK-RL100",
    part_type: "light_arms", // rocket
    faction: "B",
    price: 12500
  },
  {
    part_id: 340,
    lang_id: 28034,
    part_name: "MSK-RL200",
    part_type: "light_arms", // rocket
    faction: "B",
    price: 15000
  },
  {
    part_id: 341,
    lang_id: 28061,
    part_name: "Rtl-Khass",
    part_type: "light_arms", // rocket
    faction: "C",
    price: 12000
  },
  {
    part_id: 342,
    lang_id: 28062,
    part_name: "Rtl-Kurunb",
    part_type: "light_arms", // rocket
    faction: "C",
    price: 13000
  },
  {
    part_id: 343,
    lang_id: 28101,
    part_name: "RFZ-WRL-1",
    part_type: "light_arms", // rocket
    faction: "A",
    price: null
  },
  {
    part_id: 344,
    lang_id: 28102,
    part_name: "RFZ-WRL-2",
    part_type: "light_arms", // rocket
    faction: "A",
    price: null
  },
  {
    part_id: 345,
    lang_id: 29001,
    part_name: "M15HR Guisarme",
    part_type: "heavy_arms", // huge rocket
    faction: "A",
    price: 12500
  },
  {
    part_id: 346,
    lang_id: 29002,
    part_name: "M29HR Trident",
    part_type: "heavy_arms", // huge rocket
    faction: "A",
    price: 14000
  },
  {
    part_id: 347,
    lang_id: 29031,
    part_name: "MSK-HR1000",
    part_type: "heavy_arms", // huge rocket
    faction: "B",
    price: 15000
  },
  {
    part_id: 348,
    lang_id: 29032,
    part_name: "MSK-HR1001",
    part_type: "heavy_arms", // huge rocket
    faction: "B",
    price: null
  },
  {
    part_id: 349,
    lang_id: 29061,
    part_name: "HRl-Basal",
    part_type: "heavy_arms", // huge rocket
    faction: "C",
    price: 14500
  },
  {
    part_id: 350,
    lang_id: 29101,
    part_name: "RFZ-WHR-1",
    part_type: "heavy_arms", // huge rocket
    faction: "A",
    price: null
  },
  {
    part_id: 351,
    lang_id: 30001,
    part_name: "M14MS Javelin",
    part_type: "heavy_arms", // missile
    faction: "A",
    price: 15000
  },
  {
    part_id: 352,
    lang_id: 30002,
    part_name: "M26MS Tomahawk",
    part_type: "heavy_arms", // missile
    faction: "A",
    price: 16500
  },
  {
    part_id: 353,
    lang_id: 30031,
    part_name: "MSK-MS1000",
    part_type: "heavy_arms", // missile
    faction: "B",
    price: 14500
  },
  {
    part_id: 354,
    lang_id: 30032,
    part_name: "MSK-MS1500",
    part_type: "heavy_arms", // missile
    faction: "B",
    price: 16000
  },
  {
    part_id: 355,
    lang_id: 30033,
    part_name: "MSK-MS1001",
    part_type: "heavy_arms", // missile
    faction: "B",
    price: null
  },
  {
    part_id: 356,
    lang_id: 30034,
    part_name: "MSK-MS1501",
    part_type: "heavy_arms", // missile
    faction: "B",
    price: 17500
  },
  {
    part_id: 357,
    lang_id: 30061,
    part_name: "Msl-Khadrawat",
    part_type: "heavy_arms", // missile
    faction: "C",
    price: 14000
  },
  {
    part_id: 358,
    lang_id: 30101,
    part_name: "RFZ-WMS-1",
    part_type: "heavy_arms", // missile
    faction: "A",
    price: null
  }
];

export const PARTS_BY_ID: ReadonlyMap<number, Part> = new Map(
  PARTS.map((part) => [part.part_id, part]),
);

export function getPartById(partId: number): Part | undefined {
  return PARTS_BY_ID.get(partId);
}

export function getPartsByFaction(faction: string): Part[] {
  const code = faction.toUpperCase();
  return PARTS.filter((part) => part.faction === code);
}
