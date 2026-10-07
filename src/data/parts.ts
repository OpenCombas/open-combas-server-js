export interface Part {
  /** Asset stem. The shop catalog id is packed from this name, for example `CK_CA001`. */
  part_id: string;
  lang_id: number;
  part_name: string;
  part_type: string;
  faction: string;
  /** Shop buy price (LineUp Parts Price). */
  price: number;
}

/** Shop catalog. Rafzakael campaign parts are listed in `campaign-parts.ts`. */
export const PARTS: Part[] = [
  {
    part_id: "CK_CA001",
    lang_id: 1001,
    part_name: "M02CK Pickett",
    part_type: "cockpit",
    faction: "A",
    price: 16000
  },
  {
    part_id: "CK_CA002",
    lang_id: 1002,
    part_name: "M07CK Brooke",
    part_type: "cockpit",
    faction: "A",
    price: 17500
  },
  {
    part_id: "CK_CA003",
    lang_id: 1003,
    part_name: "M01CK Forrest",
    part_type: "cockpit",
    faction: "A",
    price: 14500
  },
  {
    part_id: "CK_CA004",
    lang_id: 1004,
    part_name: "M03CK Jackson",
    part_type: "cockpit",
    faction: "A",
    price: 20000
  },
  {
    part_id: "CK_CA031",
    lang_id: 1031,
    part_name: "MSK-C10",
    part_type: "cockpit",
    faction: "B",
    price: 12500
  },
  {
    part_id: "CK_CA032",
    lang_id: 1032,
    part_name: "MSK-C20",
    part_type: "cockpit",
    faction: "B",
    price: 14000
  },
  {
    part_id: "CK_CA061",
    lang_id: 1061,
    part_name: "C-Sal Kar",
    part_type: "cockpit",
    faction: "C",
    price: 16500
  },
  {
    part_id: "CK_CA062",
    lang_id: 1062,
    part_name: "C-Naml",
    part_type: "cockpit",
    faction: "C",
    price: 18000
  },
  {
    part_id: "CK_CA063",
    lang_id: 1063,
    part_name: "C-Dabbur",
    part_type: "cockpit",
    faction: "C",
    price: 18500
  },
  {
    part_id: "CK_CA064",
    lang_id: 1064,
    part_name: "C-Ankabut",
    part_type: "cockpit",
    faction: "C",
    price: 20000
  },
  {
    part_id: "CK_CB001",
    lang_id: 1301,
    part_name: "M04CK Stuart",
    part_type: "cockpit",
    faction: "A",
    price: 19000
  },
  {
    part_id: "CK_CB002",
    lang_id: 1302,
    part_name: "M05CK Johnston",
    part_type: "cockpit",
    faction: "A",
    price: 21000
  },
  {
    part_id: "CK_CB003",
    lang_id: 1303,
    part_name: "M06CK Lee",
    part_type: "cockpit",
    faction: "A",
    price: 23000
  },
  {
    part_id: "CK_CB031",
    lang_id: 1331,
    part_name: "MSK-C100",
    part_type: "cockpit",
    faction: "B",
    price: 16500
  },
  {
    part_id: "CK_CB032",
    lang_id: 1332,
    part_name: "MSK-C110",
    part_type: "cockpit",
    faction: "B",
    price: 17500
  },
  {
    part_id: "CK_CB061",
    lang_id: 1361,
    part_name: "C-Nahl",
    part_type: "cockpit",
    faction: "C",
    price: 22000
  },
  {
    part_id: "CK_CB062",
    lang_id: 1362,
    part_name: "C-Jarad",
    part_type: "cockpit",
    faction: "C",
    price: 23500
  },
  {
    part_id: "CK_CB063",
    lang_id: 1363,
    part_name: "C-Farasha",
    part_type: "cockpit",
    faction: "C",
    price: 25000
  },
  {
    part_id: "CK_CC031",
    lang_id: 1631,
    part_name: "MSK-C1000",
    part_type: "cockpit",
    faction: "B",
    price: 19000
  },
  {
    part_id: "CK_CC032",
    lang_id: 1632,
    part_name: "MSK-C1500",
    part_type: "cockpit",
    faction: "B",
    price: 20000
  },
  {
    part_id: "CK_CC033",
    lang_id: 1633,
    part_name: "MSK-C1001",
    part_type: "cockpit",
    faction: "B",
    price: 24000
  },
  {
    part_id: "LG_TL001",
    lang_id: 2001,
    part_name: "M03TL Garfield",
    part_type: "mobility_base", // bipedal chassis
    faction: "A",
    price: 16000
  },
  {
    part_id: "LG_TL002",
    lang_id: 2002,
    part_name: "M10TL Shaw",
    part_type: "mobility_base", // bipedal chassis
    faction: "A",
    price: 23000
  },
  {
    part_id: "LG_TL003",
    lang_id: 2003,
    part_name: "M13TL Scott",
    part_type: "mobility_base", // bipedal chassis
    faction: "A",
    price: 21000
  },
  {
    part_id: "LG_TL031",
    lang_id: 2031,
    part_name: "MSK-TL500",
    part_type: "mobility_base", // bipedal chassis
    faction: "B",
    price: 14000
  },
  {
    part_id: "LG_TL032",
    lang_id: 2032,
    part_name: "MSK-TL501",
    part_type: "mobility_base", // bipedal chassis
    faction: "B",
    price: 16000
  },
  {
    part_id: "LG_TL061",
    lang_id: 2061,
    part_name: "TL-Sal Kar",
    part_type: "mobility_base", // bipedal chassis
    faction: "C",
    price: 19500
  },
  {
    part_id: "LG_TL062",
    lang_id: 2062,
    part_name: "TL-Dhib",
    part_type: "mobility_base", // bipedal chassis
    faction: "C",
    price: 21500
  },
  {
    part_id: "LG_TL063",
    lang_id: 2063,
    part_name: "TL-Kalb",
    part_type: "mobility_base", // bipedal chassis
    faction: "C",
    price: 23000
  },
  {
    part_id: "LG_RJ001",
    lang_id: 2301,
    part_name: "M01RJ Burns",
    part_type: "mobility_base", // inverse chassis
    faction: "A",
    price: 15000
  },
  {
    part_id: "LG_RJ002",
    lang_id: 2302,
    part_name: "M08RJ Hancock",
    part_type: "mobility_base", // inverse chassis
    faction: "A",
    price: 19500
  },
  {
    part_id: "LG_RJ003",
    lang_id: 2303,
    part_name: "M17RJ Douglass",
    part_type: "mobility_base", // inverse chassis
    faction: "A",
    price: 23000
  },
  {
    part_id: "LG_RJ031",
    lang_id: 2331,
    part_name: "MSK-RJ400",
    part_type: "mobility_base", // inverse chassis
    faction: "B",
    price: 14500
  },
  {
    part_id: "LG_RJ032",
    lang_id: 2332,
    part_name: "MSK-RJ401",
    part_type: "mobility_base", // inverse chassis
    faction: "B",
    price: 16500
  },
  {
    part_id: "LG_RJ061",
    lang_id: 2361,
    part_name: "RJ-Jamal",
    part_type: "mobility_base", // inverse chassis
    faction: "C",
    price: 19000
  },
  {
    part_id: "LG_RJ062",
    lang_id: 2362,
    part_name: "RJ-Naqa",
    part_type: "mobility_base", // inverse chassis
    faction: "C",
    price: 20500
  },
  {
    part_id: "LG_ML001",
    lang_id: 2601,
    part_name: "M04ML Grant",
    part_type: "mobility_base", // multi chassis
    faction: "A",
    price: 18000
  },
  {
    part_id: "LG_ML002",
    lang_id: 2602,
    part_name: "M09ML Dupont",
    part_type: "mobility_base", // multi chassis
    faction: "A",
    price: 19500
  },
  {
    part_id: "LG_ML011",
    lang_id: 2611,
    part_name: "M15ML Sharman",
    part_type: "mobility_base", // multi chassis
    faction: "A",
    price: 22000
  },
  {
    part_id: "LG_ML031",
    lang_id: 2631,
    part_name: "MSK-ML200",
    part_type: "mobility_base", // multi chassis
    faction: "B",
    price: 16000
  },
  {
    part_id: "LG_ML032",
    lang_id: 2632,
    part_name: "MSK-ML201",
    part_type: "mobility_base", // multi chassis
    faction: "B",
    price: 17500
  },
  {
    part_id: "LG_ML041",
    lang_id: 2641,
    part_name: "MSK-ML210",
    part_type: "mobility_base", // multi chassis
    faction: "B",
    price: 19000
  },
  {
    part_id: "LG_ML042",
    lang_id: 2642,
    part_name: "MSK-ML211",
    part_type: "mobility_base", // multi chassis
    faction: "B",
    price: 21500
  },
  {
    part_id: "LG_ML061",
    lang_id: 2661,
    part_name: "ML-Thawr",
    part_type: "mobility_base", // multi chassis
    faction: "C",
    price: 23000
  },
  {
    part_id: "LG_ML062",
    lang_id: 2662,
    part_name: "ML-Baqara",
    part_type: "mobility_base", // multi chassis
    faction: "C",
    price: 24500
  },
  {
    part_id: "LG_CL001",
    lang_id: 2901,
    part_name: "M05CL Custer",
    part_type: "mobility_base", // treaded chassis
    faction: "A",
    price: 17000
  },
  {
    part_id: "LG_CL002",
    lang_id: 2902,
    part_name: "M07CL Hooker",
    part_type: "mobility_base", // treaded chassis
    faction: "A",
    price: 18000
  },
  {
    part_id: "LG_CL003",
    lang_id: 2903,
    part_name: "M14CL Meade",
    part_type: "mobility_base", // treaded chassis
    faction: "A",
    price: 19500
  },
  {
    part_id: "LG_CL031",
    lang_id: 2931,
    part_name: "MSK-CL110",
    part_type: "mobility_base", // treaded chassis
    faction: "B",
    price: 17500
  },
  {
    part_id: "LG_CL032",
    lang_id: 2932,
    part_name: "MSK-CL101",
    part_type: "mobility_base", // treaded chassis
    faction: "B",
    price: 19000
  },
  {
    part_id: "LG_CL033",
    lang_id: 2933,
    part_name: "MSK-CL100",
    part_type: "mobility_base", // treaded chassis
    faction: "B",
    price: 21000
  },
  {
    part_id: "LG_CL061",
    lang_id: 2961,
    part_name: "CL-Himar",
    part_type: "mobility_base", // treaded chassis
    faction: "C",
    price: 20000
  },
  {
    part_id: "LG_CL062",
    lang_id: 2962,
    part_name: "CL-Baghl",
    part_type: "mobility_base", // treaded chassis
    faction: "C",
    price: 21500
  },
  {
    part_id: "LG_HL001",
    lang_id: 3201,
    part_name: "M06HL Cushing",
    part_type: "mobility_base", // hover chassis
    faction: "A",
    price: 20500
  },
  {
    part_id: "LG_HL002",
    lang_id: 3202,
    part_name: "M12HL Wells",
    part_type: "mobility_base", // hover chassis
    faction: "A",
    price: 21500
  },
  {
    part_id: "LG_HL031",
    lang_id: 3231,
    part_name: "MSK-HL600",
    part_type: "mobility_base", // hover chassis
    faction: "B",
    price: 13000
  },
  {
    part_id: "LG_HL032",
    lang_id: 3232,
    part_name: "MSK-HL601",
    part_type: "mobility_base", // hover chassis
    faction: "B",
    price: 13500
  },
  {
    part_id: "LG_HL061",
    lang_id: 3261,
    part_name: "HL-Ghazal",
    part_type: "mobility_base", // hover chassis
    faction: "C",
    price: 19000
  },
  {
    part_id: "LG_HL062",
    lang_id: 3262,
    part_name: "HL-Labua",
    part_type: "mobility_base", // hover chassis
    faction: "C",
    price: 20500
  },
  {
    part_id: "LG_HL063",
    lang_id: 3263,
    part_name: "HL-Namir",
    part_type: "mobility_base", // hover chassis
    faction: "C",
    price: 22000
  },
  {
    part_id: "LG_HL064",
    lang_id: 3264,
    part_name: "HL-Asad",
    part_type: "mobility_base", // hover chassis
    faction: "C",
    price: 24500
  },
  {
    part_id: "LG_WL001",
    lang_id: 3501,
    part_name: "M02WL Grierson",
    part_type: "mobility_base", // wheeled chassis
    faction: "A",
    price: 16000
  },
  {
    part_id: "LG_WL002",
    lang_id: 3502,
    part_name: "M11WL Sheridan",
    part_type: "mobility_base", // wheeled chassis
    faction: "A",
    price: 18000
  },
  {
    part_id: "LG_WL003",
    lang_id: 3503,
    part_name: "M16WL Meagher",
    part_type: "mobility_base", // wheeled chassis
    faction: "A",
    price: 19500
  },
  {
    part_id: "LG_WL031",
    lang_id: 3531,
    part_name: "MSK-WL300",
    part_type: "mobility_base", // wheeled chassis
    faction: "B",
    price: 15000
  },
  {
    part_id: "LG_WL032",
    lang_id: 3532,
    part_name: "MSK-WL310",
    part_type: "mobility_base", // wheeled chassis
    faction: "B",
    price: 17000
  },
  {
    part_id: "LG_WL061",
    lang_id: 3561,
    part_name: "WL-Hisan",
    part_type: "mobility_base", // wheeled chassis
    faction: "C",
    price: 18000
  },
  {
    part_id: "LG_WL062",
    lang_id: 3562,
    part_name: "WL-Faras",
    part_type: "mobility_base", // wheeled chassis
    faction: "C",
    price: 19000
  },
  {
    part_id: "LG_WL063",
    lang_id: 3563,
    part_name: "WL-Jawad",
    part_type: "mobility_base", // wheeled chassis
    faction: "C",
    price: 20000
  },
  {
    part_id: "",
    lang_id: 3699,
    part_name: "Test myriapod",
    part_type: "mobility_base", // multi chassis
    faction: "C",
    price: null
  },
  {
    part_id: "GE_GA001",
    lang_id: 4001,
    part_name: "M01G Papin",
    part_type: "generator",
    faction: "A",
    price: 15000
  },
  {
    part_id: "GE_GA002",
    lang_id: 4002,
    part_name: "M04G Volta",
    part_type: "generator",
    faction: "A",
    price: 17000
  },
  {
    part_id: "GE_GA031",
    lang_id: 4031,
    part_name: "MSK-G100",
    part_type: "generator",
    faction: "B",
    price: 12500
  },
  {
    part_id: "GE_GA032",
    lang_id: 4032,
    part_name: "MSK-G101",
    part_type: "generator",
    faction: "B",
    price: 14500
  },
  {
    part_id: "GE_GA061",
    lang_id: 4061,
    part_name: "G-Sal Kar",
    part_type: "generator",
    faction: "C",
    price: 17500
  },
  {
    part_id: "GE_GA062",
    lang_id: 4062,
    part_name: "G-Zahara",
    part_type: "generator",
    faction: "C",
    price: 18500
  },
  {
    part_id: "GE_GB001",
    lang_id: 4301,
    part_name: "M02G Franklin",
    part_type: "generator",
    faction: "A",
    price: 19000
  },
  {
    part_id: "GE_GB002",
    lang_id: 4302,
    part_name: "M05G Young",
    part_type: "generator",
    faction: "A",
    price: 20500
  },
  {
    part_id: "GE_GB031",
    lang_id: 4331,
    part_name: "MSK-G1000",
    part_type: "generator",
    faction: "B",
    price: 17500
  },
  {
    part_id: "GE_GB032",
    lang_id: 4332,
    part_name: "MSK-G1500",
    part_type: "generator",
    faction: "B",
    price: 20500
  },
  {
    part_id: "GE_GB033",
    lang_id: 4333,
    part_name: "MSK-G1501",
    part_type: "generator",
    faction: "B",
    price: null
  },
  {
    part_id: "GE_GB061",
    lang_id: 4361,
    part_name: "G-Shajar",
    part_type: "generator",
    faction: "C",
    price: 21000
  },
  {
    part_id: "GE_GC001",
    lang_id: 4601,
    part_name: "M03G Ampere",
    part_type: "generator",
    faction: "A",
    price: 19000
  },
  {
    part_id: "GE_GC002",
    lang_id: 4602,
    part_name: "M06G Nobili",
    part_type: "generator",
    faction: "A",
    price: 21000
  },
  {
    part_id: "GE_GC031",
    lang_id: 4631,
    part_name: "MSK-G10",
    part_type: "generator",
    faction: "B",
    price: 21000
  },
  {
    part_id: "GE_GC061",
    lang_id: 4661,
    part_name: "G-Ushb",
    part_type: "generator",
    faction: "C",
    price: 20500
  },
  {
    part_id: "GE_GC062",
    lang_id: 4662,
    part_name: "G-Kala",
    part_type: "generator",
    faction: "C",
    price: 22500
  },
  {
    part_id: "GE_GC063",
    lang_id: 4663,
    part_name: "G-Saq",
    part_type: "generator",
    faction: "C",
    price: 24000
  },
  {
    part_id: "AX_AM001",
    lang_id: 5001,
    part_name: "M01AM Gauntlet",
    part_type: "assist_parts", // armor
    faction: "A",
    price: 3500
  },
  {
    part_id: "AX_AM002",
    lang_id: 5002,
    part_name: "M02AM Vambrace",
    part_type: "assist_parts", // armor
    faction: "A",
    price: null
  },
  {
    part_id: "AX_AM003",
    lang_id: 5003,
    part_name: "M04AM Couter",
    part_type: "assist_parts", // armor
    faction: "A",
    price: 4250
  },
  {
    part_id: "AX_AM011",
    lang_id: 5011,
    part_name: "M03AM Greave",
    part_type: "assist_parts", // armor
    faction: "A",
    price: 4500
  },
  {
    part_id: "AX_AM012",
    lang_id: 5012,
    part_name: "M05AM Poleyn",
    part_type: "assist_parts", // armor
    faction: "A",
    price: 5000
  },
  {
    part_id: "AX_AM031",
    lang_id: 5031,
    part_name: "MSK-AM110",
    part_type: "assist_parts", // armor
    faction: "B",
    price: 2500
  },
  {
    part_id: "AX_AM032",
    lang_id: 5032,
    part_name: "MSK-AM120",
    part_type: "assist_parts", // armor
    faction: "B",
    price: 2750
  },
  {
    part_id: "AX_AM033",
    lang_id: 5033,
    part_name: "MSK-AM130",
    part_type: "assist_parts", // armor
    faction: "B",
    price: 3250
  },
  {
    part_id: "AX_AM034",
    lang_id: 5034,
    part_name: "MSK-AM100",
    part_type: "assist_parts", // armor
    faction: "B",
    price: 3900
  },
  {
    part_id: "AX_AM041",
    lang_id: 5041,
    part_name: "MSK-AM1000",
    part_type: "assist_parts", // armor
    faction: "B",
    price: 3000
  },
  {
    part_id: "AX_AM042",
    lang_id: 5042,
    part_name: "MSK-AM1100",
    part_type: "assist_parts", // armor
    faction: "B",
    price: 3400
  },
  {
    part_id: "AX_AM043",
    lang_id: 5043,
    part_name: "MSK-AM1200",
    part_type: "assist_parts", // armor
    faction: "B",
    price: 3900
  },
  {
    part_id: "AX_AM061",
    lang_id: 5061,
    part_name: "AM-Dhahab",
    part_type: "assist_parts", // armor
    faction: "C",
    price: 3400
  },
  {
    part_id: "AX_AM062",
    lang_id: 5062,
    part_name: "AM-Fidda",
    part_type: "assist_parts", // armor
    faction: "C",
    price: 3800
  },
  {
    part_id: "AX_AM063",
    lang_id: 5063,
    part_name: "AM-Nuhas",
    part_type: "assist_parts", // armor
    faction: "C",
    price: 4000
  },
  {
    part_id: "AX_AM071",
    lang_id: 5071,
    part_name: "AM-Hadid",
    part_type: "assist_parts", // armor
    faction: "C",
    price: 2800
  },
  {
    part_id: "AX_AM072",
    lang_id: 5072,
    part_name: "AM-Safih",
    part_type: "assist_parts", // armor
    faction: "C",
    price: null
  },
  {
    part_id: "AX_RD001",
    lang_id: 6001,
    part_name: "M01RD Carnot",
    part_type: "assist_parts", // heat sink
    faction: "A",
    price: 2650
  },
  {
    part_id: "AX_RD002",
    lang_id: 6002,
    part_name: "M02RD Kelvin",
    part_type: "assist_parts", // heat sink
    faction: "A",
    price: 2900
  },
  {
    part_id: "AX_RD031",
    lang_id: 6031,
    part_name: "MSK-RD100",
    part_type: "assist_parts", // heat sink
    faction: "B",
    price: 3100
  },
  {
    part_id: "AX_RD032",
    lang_id: 6032,
    part_name: "MSK-RD110",
    part_type: "assist_parts", // heat sink
    faction: "B",
    price: 3250
  },
  {
    part_id: "AX_RD033",
    lang_id: 6033,
    part_name: "MSK-RD120",
    part_type: "assist_parts", // heat sink
    faction: "B",
    price: 3400
  },
  {
    part_id: "AX_RD061",
    lang_id: 6061,
    part_name: "RD-Nahar",
    part_type: "assist_parts", // heat sink
    faction: "C",
    price: 3150
  },
  {
    part_id: "AX_RD062",
    lang_id: 6062,
    part_name: "RD-Buhayra",
    part_type: "assist_parts", // heat sink
    faction: "C",
    price: 3250
  },
  {
    part_id: "AX_SP001",
    lang_id: 7001,
    part_name: "M01SP Born",
    part_type: "spacer",
    faction: "A",
    price: 5000
  },
  {
    part_id: "AX_SP002",
    lang_id: 7002,
    part_name: "M05SP Chest",
    part_type: "spacer",
    faction: "A",
    price: 5000
  },
  {
    part_id: "AX_SP011",
    lang_id: 7011,
    part_name: "M02SP Abdomen",
    part_type: "spacer",
    faction: "A",
    price: 2500
  },
  {
    part_id: "AX_SP012",
    lang_id: 7012,
    part_name: "M04SP Finger",
    part_type: "spacer",
    faction: "A",
    price: null
  },
  {
    part_id: "AX_SP021",
    lang_id: 7021,
    part_name: "M03SP Neck",
    part_type: "spacer",
    faction: "A",
    price: 2500
  },
  {
    part_id: "AX_SP022",
    lang_id: 7022,
    part_name: "M06SP Arm",
    part_type: "spacer",
    faction: "A",
    price: 2500
  },
  {
    part_id: "AX_SP031",
    lang_id: 7031,
    part_name: "MSK-SP200",
    part_type: "spacer",
    faction: "B",
    price: 5000
  },
  {
    part_id: "AX_SP032",
    lang_id: 7032,
    part_name: "MSK-SP400",
    part_type: "spacer",
    faction: "B",
    price: 2500
  },
  {
    part_id: "AX_SP041",
    lang_id: 7041,
    part_name: "MSK-SP100",
    part_type: "spacer",
    faction: "B",
    price: 2500
  },
  {
    part_id: "AX_SP042",
    lang_id: 7042,
    part_name: "MSK-SP300",
    part_type: "spacer",
    faction: "B",
    price: null
  },
  {
    part_id: "AX_SP051",
    lang_id: 7051,
    part_name: "MSK-SP500",
    part_type: "spacer",
    faction: "B",
    price: 2500
  },
  {
    part_id: "AX_SP052",
    lang_id: 7052,
    part_name: "MSK-SP600",
    part_type: "spacer",
    faction: "B",
    price: null
  },
  {
    part_id: "AX_SP061",
    lang_id: 7061,
    part_name: "SP-Dhira",
    part_type: "spacer",
    faction: "C",
    price: 2500
  },
  {
    part_id: "AX_SP062",
    lang_id: 7062,
    part_name: "SP-Rijil",
    part_type: "spacer",
    faction: "C",
    price: null
  },
  {
    part_id: "AX_SP071",
    lang_id: 7071,
    part_name: "SP-Sadr",
    part_type: "spacer",
    faction: "C",
    price: null
  },
  {
    part_id: "AX_SP072",
    lang_id: 7072,
    part_name: "SP-Zahr",
    part_type: "spacer",
    faction: "C",
    price: 2500
  },
  {
    part_id: "AX_SP081",
    lang_id: 7081,
    part_name: "SP-Yad",
    part_type: "spacer",
    faction: "C",
    price: 2500
  },
  {
    part_id: "AX_SP082",
    lang_id: 7082,
    part_name: "SP-Isba",
    part_type: "spacer",
    faction: "C",
    price: 2500
  },
  {
    part_id: "AX_FS001",
    lang_id: 8001,
    part_name: "M01FS Boyle",
    part_type: "assist_parts", // fuel tank
    faction: "A",
    price: 1750
  },
  {
    part_id: "AX_FS002",
    lang_id: 8002,
    part_name: "M02FS Charles",
    part_type: "assist_parts", // fuel tank
    faction: "A",
    price: 2000
  },
  {
    part_id: "AX_FS031",
    lang_id: 8031,
    part_name: "MSK-FS100",
    part_type: "assist_parts", // fuel tank
    faction: "B",
    price: 2500
  },
  {
    part_id: "AX_FS032",
    lang_id: 8032,
    part_name: "MSK-FS101",
    part_type: "assist_parts", // fuel tank
    faction: "B",
    price: 2750
  },
  {
    part_id: "AX_FS061",
    lang_id: 8061,
    part_name: "FS-Halib",
    part_type: "assist_parts", // fuel tank
    faction: "C",
    price: 2000
  },
  {
    part_id: "AX_FS062",
    lang_id: 8062,
    part_name: "FS-Zabadi",
    part_type: "assist_parts", // fuel tank
    faction: "C",
    price: 2250
  },
  {
    part_id: "AX_RC001",
    lang_id: 9001,
    part_name: "M01RC Cayley",
    part_type: "assist_parts", // rotorcraft
    faction: "A",
    price: 4750
  },
  {
    part_id: "AX_RC002",
    lang_id: 9002,
    part_name: "M02RC Wright",
    part_type: "assist_parts", // rotorcraft
    faction: "A",
    price: 5750
  },
  {
    part_id: "AX_RC031",
    lang_id: 9031,
    part_name: "MSK-RC100",
    part_type: "assist_parts", // rotorcraft
    faction: "B",
    price: 5000
  },
  {
    part_id: "AX_RC061",
    lang_id: 9061,
    part_name: "RC-Sununu",
    part_type: "assist_parts", // rotorcraft
    faction: "C",
    price: 4500
  },
  {
    part_id: "AX_RC062",
    lang_id: 9062,
    part_name: "RC-Nasr",
    part_type: "assist_parts", // rotorcraft
    faction: "C",
    price: 6000
  },
  {
    part_id: "AX_RC063",
    lang_id: 9063,
    part_name: "RC-Saqr",
    part_type: "assist_parts", // rotorcraft
    faction: "C",
    price: 6500
  },
  {
    part_id: "AX_RC064",
    lang_id: 9064,
    part_name: "RC-Tawus",
    part_type: "assist_parts", // rotorcraft
    faction: "C",
    price: 7250
  },
  {
    part_id: "AX_SD001",
    lang_id: 10001,
    part_name: "M03SD Kepler",
    part_type: "assist_parts", // sensors
    faction: "A",
    price: 6500
  },
  {
    part_id: "AX_SD002",
    lang_id: 10002,
    part_name: "M01SD Huygens",
    part_type: "assist_parts", // sensors
    faction: "A",
    price: 7000
  },
  {
    part_id: "AX_SD003",
    lang_id: 10003,
    part_name: "M02SD Faraday",
    part_type: "assist_parts", // sensors
    faction: "A",
    price: 7250
  },
  {
    part_id: "AX_SD031",
    lang_id: 10031,
    part_name: "MSK-SD110",
    part_type: "assist_parts", // sensors
    faction: "B",
    price: 6000
  },
  {
    part_id: "AX_SD032",
    lang_id: 10032,
    part_name: "MSK-SD111",
    part_type: "assist_parts", // sensors
    faction: "B",
    price: 6750
  },
  {
    part_id: "AX_SD033",
    lang_id: 10033,
    part_name: "MSK-SD100",
    part_type: "assist_parts", // sensors
    faction: "B",
    price: 7000
  },
  {
    part_id: "AX_SD061",
    lang_id: 10061,
    part_name: "SD-Anf",
    part_type: "assist_parts", // sensors
    faction: "C",
    price: 8000
  },
  {
    part_id: "AX_SD062",
    lang_id: 10062,
    part_name: "SD-Udhun",
    part_type: "assist_parts", // sensors
    faction: "C",
    price: 7500
  },
  {
    part_id: "AX_SD063",
    lang_id: 10063,
    part_name: "SD-Ayn",
    part_type: "assist_parts", // sensors
    faction: "C",
    price: 7750
  },
  {
    part_id: "AX_MC001",
    lang_id: 11001,
    part_name: "M01MC Shield",
    part_type: "assist_parts", // missile counter
    faction: "A",
    price: 6500
  },
  {
    part_id: "AX_MC002",
    lang_id: 11002,
    part_name: "M02MC Bucker",
    part_type: "assist_parts", // missile counter
    faction: "A",
    price: 6000
  },
  {
    part_id: "AX_MC031",
    lang_id: 11031,
    part_name: "MSK-MC100",
    part_type: "assist_parts", // missile counter
    faction: "B",
    price: 7000
  },
  {
    part_id: "AX_MC032",
    lang_id: 11032,
    part_name: "MSK-MC200",
    part_type: "assist_parts", // missile counter
    faction: "B",
    price: 6750
  },
  {
    part_id: "AX_MC061",
    lang_id: 11061,
    part_name: "MS-Rih",
    part_type: "assist_parts", // missile counter
    faction: "C",
    price: 7500
  },
  {
    part_id: "AX_JM001",
    lang_id: 12001,
    part_name: "M01JM Sallet",
    part_type: "assist_parts", // na jammer
    faction: "A",
    price: 4500
  },
  {
    part_id: "AX_JM002",
    lang_id: 12002,
    part_name: "M02JM Basinet",
    part_type: "assist_parts", // na jammer
    faction: "A",
    price: 5000
  },
  {
    part_id: "AX_JM031",
    lang_id: 12031,
    part_name: "MSK-JM100",
    part_type: "assist_parts", // na jammer
    faction: "B",
    price: 4250
  },
  {
    part_id: "AX_JM061",
    lang_id: 12061,
    part_name: "JM-Barq",
    part_type: "assist_parts", // na jammer
    faction: "C",
    price: 4000
  },
  {
    part_id: "AX_JM062",
    lang_id: 12062,
    part_name: "JM-Saiqa",
    part_type: "assist_parts", // na jammer
    faction: "C",
    price: 4500
  },
  {
    part_id: "AX_JM063",
    lang_id: 12063,
    part_name: "JM-Rad",
    part_type: "assist_parts", // na jammer
    faction: "C",
    price: 5250
  },
  {
    part_id: "AX_NM001",
    lang_id: 13001,
    part_name: "M01NM Morse",
    part_type: "na_marker",
    faction: "A",
    price: 12500
  },
  {
    part_id: "AX_NM002",
    lang_id: 13002,
    part_name: "M02NM Bell",
    part_type: "na_marker",
    faction: "A",
    price: 14000
  },
  {
    part_id: "AX_NM003",
    lang_id: 13003,
    part_name: "M03NM Hertz",
    part_type: "na_marker",
    faction: "A",
    price: 15000
  },
  {
    part_id: "AX_NM004",
    lang_id: 13004,
    part_name: "M04NM Maxwell",
    part_type: "na_marker",
    faction: "A",
    price: 16500
  },
  {
    part_id: "AX_NM031",
    lang_id: 13031,
    part_name: "MSK-NM1000",
    part_type: "na_marker",
    faction: "B",
    price: 15000
  },
  {
    part_id: "AX_NM032",
    lang_id: 13032,
    part_name: "MSK-NM1500",
    part_type: "na_marker",
    faction: "B",
    price: 16000
  },
  {
    part_id: "AX_NM033",
    lang_id: 13033,
    part_name: "MSK-NM2000",
    part_type: "na_marker",
    faction: "B",
    price: 18000
  },
  {
    part_id: "AX_NM034",
    lang_id: 13034,
    part_name: "MSK-NM2500",
    part_type: "na_marker",
    faction: "B",
    price: 20000
  },
  {
    part_id: "AX_NM061",
    lang_id: 13061,
    part_name: "NM-Alkawn",
    part_type: "na_marker",
    faction: "C",
    price: 16500
  },
  {
    part_id: "AX_NM062",
    lang_id: 13062,
    part_name: "NM-Ashshams",
    part_type: "na_marker",
    faction: "C",
    price: 18500
  },
  {
    part_id: "AX_NM063",
    lang_id: 13063,
    part_name: "NM-Najm",
    part_type: "na_marker",
    faction: "C",
    price: 20000
  },
  {
    part_id: "AX_NM064",
    lang_id: 13064,
    part_name: "NM-Kawkab",
    part_type: "na_marker",
    faction: "C",
    price: 21000
  },
  {
    part_id: "WH_HC001",
    lang_id: 14001,
    part_name: "M16HC Bastard",
    part_type: "heavy_arms", // huge cannon
    faction: "A",
    price: 11000
  },
  {
    part_id: "WH_HC002",
    lang_id: 14002,
    part_name: "M25HC Gram",
    part_type: "heavy_arms", // huge cannon
    faction: "A",
    price: 13000
  },
  {
    part_id: "WH_HC031",
    lang_id: 14031,
    part_name: "MSK-HC1000/O",
    part_type: "heavy_arms", // huge cannon
    faction: "B",
    price: 12500
  },
  {
    part_id: "WH_HC032",
    lang_id: 14032,
    part_name: "MSK-HC1001/O",
    part_type: "heavy_arms", // huge cannon
    faction: "B",
    price: 15000
  },
  {
    part_id: "WH_HC033",
    lang_id: 14033,
    part_name: "MSK-HC1500/D",
    part_type: "heavy_arms", // huge cannon
    faction: "B",
    price: 16500
  },
  {
    part_id: "WH_HC034",
    lang_id: 14034,
    part_name: "MSK-HC1501/D",
    part_type: "heavy_arms", // huge cannon
    faction: "B",
    price: null
  },
  {
    part_id: "WH_HC061",
    lang_id: 14061,
    part_name: "HCn-Asifa",
    part_type: "heavy_arms", // huge cannon
    faction: "C",
    price: 15000
  },
  {
    part_id: "WP_GN001",
    lang_id: 15001,
    part_name: "M01CN Falchion",
    part_type: "light_arms", // cannon
    faction: "A",
    price: 6000
  },
  {
    part_id: "WP_GN002",
    lang_id: 15002,
    part_name: "M20CN Anelace",
    part_type: "light_arms", // cannon
    faction: "A",
    price: 6750
  },
  {
    part_id: "WP_GN003",
    lang_id: 15003,
    part_name: "M27CN Flanberg",
    part_type: "light_arms", // cannon
    faction: "A",
    price: null
  },
  {
    part_id: "WP_GN031",
    lang_id: 15031,
    part_name: "MSK-CN100",
    part_type: "light_arms", // cannon
    faction: "B",
    price: 6750
  },
  {
    part_id: "WP_GN032",
    lang_id: 15032,
    part_name: "MSK-CN200",
    part_type: "light_arms", // cannon
    faction: "B",
    price: 7000
  },
  {
    part_id: "WP_GN033",
    lang_id: 15033,
    part_name: "MSK-CN201",
    part_type: "light_arms", // cannon
    faction: "B",
    price: 7500
  },
  {
    part_id: "WP_GN034",
    lang_id: 15034,
    part_name: "MSK-CN300",
    part_type: "light_arms", // cannon
    faction: "B",
    price: 9000
  },
  {
    part_id: "WP_GN061",
    lang_id: 15061,
    part_name: "Cnn-Fasuliya",
    part_type: "light_arms", // cannon
    faction: "C",
    price: 6500
  },
  {
    part_id: "WP_GN062",
    lang_id: 15062,
    part_name: "Cnn-Bisilla",
    part_type: "light_arms", // cannon
    faction: "C",
    price: 8000
  },
  {
    part_id: "WP_HW001",
    lang_id: 16001,
    part_name: "M02HW Espadon",
    part_type: "light_arms", // howitzer
    faction: "A",
    price: 6750
  },
  {
    part_id: "WP_HW002",
    lang_id: 16002,
    part_name: "M21HW Faus",
    part_type: "light_arms", // howitzer
    faction: "A",
    price: 7500
  },
  {
    part_id: "WP_HW003",
    lang_id: 16003,
    part_name: "M28HW Pallasch",
    part_type: "light_arms", // howitzer
    faction: "A",
    price: 8500
  },
  {
    part_id: "WP_HW031",
    lang_id: 16031,
    part_name: "MSK-HW100",
    part_type: "light_arms", // howitzer
    faction: "B",
    price: 8000
  },
  {
    part_id: "WP_HW032",
    lang_id: 16032,
    part_name: "MSK-HW200",
    part_type: "light_arms", // howitzer
    faction: "B",
    price: null
  },
  {
    part_id: "WP_HW033",
    lang_id: 16033,
    part_name: "MSK-HW300",
    part_type: "light_arms", // howitzer
    faction: "B",
    price: 10000
  },
  {
    part_id: "WP_HW061",
    lang_id: 16061,
    part_name: "Hwz-Matar",
    part_type: "light_arms", // howitzer
    faction: "C",
    price: 8500
  },
  {
    part_id: "WP_HW062",
    lang_id: 16062,
    part_name: "Hwz-Thalj",
    part_type: "light_arms", // howitzer
    faction: "C",
    price: 9500
  },
  {
    part_id: "WP_HW063",
    lang_id: 16063,
    part_name: "Hwz-Ghayma",
    part_type: "light_arms", // howitzer
    faction: "C",
    price: 10500
  },
  {
    part_id: "WP_MT001",
    lang_id: 17001,
    part_name: "M03MT Dusack",
    part_type: "light_arms", // mortar
    faction: "A",
    price: 5000
  },
  {
    part_id: "WP_MT002",
    lang_id: 17002,
    part_name: "M31MT Falcata",
    part_type: "light_arms", // mortar
    faction: "A",
    price: 6500
  },
  {
    part_id: "WP_MT031",
    lang_id: 17031,
    part_name: "MSK-MT10",
    part_type: "light_arms", // mortar
    faction: "B",
    price: 5500
  },
  {
    part_id: "WP_MT032",
    lang_id: 17032,
    part_name: "MSK-MT20",
    part_type: "light_arms", // mortar
    faction: "B",
    price: 6750
  },
  {
    part_id: "WP_MT033",
    lang_id: 17033,
    part_name: "MSK-MT21",
    part_type: "light_arms", // mortar
    faction: "B",
    price: null
  },
  {
    part_id: "WP_MT061",
    lang_id: 17061,
    part_name: "Mtr-Qamh",
    part_type: "light_arms", // mortar
    faction: "C",
    price: 5500
  },
  {
    part_id: "WP_MT062",
    lang_id: 17062,
    part_name: "Mtr-Hinta",
    part_type: "light_arms", // mortar
    faction: "C",
    price: 6500
  },
  {
    part_id: "WP_MT063",
    lang_id: 17063,
    part_name: "Mtr-Shair",
    part_type: "light_arms", // mortar
    faction: "C",
    price: 7000
  },
  {
    part_id: "WP_SG001",
    lang_id: 18001,
    part_name: "M04SC Epee",
    part_type: "light_arms", // sniper cannon
    faction: "A",
    price: 9000
  },
  {
    part_id: "WP_SG002",
    lang_id: 18002,
    part_name: "M22SC Fleuret",
    part_type: "light_arms", // sniper cannon
    faction: "A",
    price: 11000
  },
  {
    part_id: "WP_SG003",
    lang_id: 18003,
    part_name: "M36SC Sabre",
    part_type: "light_arms", // sniper cannon
    faction: "A",
    price: null
  },
  {
    part_id: "WP_SG031",
    lang_id: 18031,
    part_name: "MSK-SC100",
    part_type: "light_arms", // sniper cannon
    faction: "B",
    price: 11000
  },
  {
    part_id: "WP_SG032",
    lang_id: 18032,
    part_name: "MSK-SC200",
    part_type: "light_arms", // sniper cannon
    faction: "B",
    price: 13000
  },
  {
    part_id: "WP_SG061",
    lang_id: 18061,
    part_name: "SpC-Himmis",
    part_type: "light_arms", // sniper cannon
    faction: "C",
    price: 12000
  },
  {
    part_id: "WP_SR001",
    lang_id: 19001,
    part_name: "M05SR Estoc",
    part_type: "light_arms", // sniper rifle
    faction: "A",
    price: 7000
  },
  {
    part_id: "WP_SR002",
    lang_id: 19002,
    part_name: "M17SR Tuck",
    part_type: "light_arms", // sniper rifle
    faction: "A",
    price: 8000
  },
  {
    part_id: "WP_SR003",
    lang_id: 19003,
    part_name: "M35SR Rapir",
    part_type: "light_arms", // sniper rifle
    faction: "A",
    price: null
  },
  {
    part_id: "WP_SR031",
    lang_id: 19031,
    part_name: "MSK-SR100",
    part_type: "light_arms", // sniper rifle
    faction: "B",
    price: 8000
  },
  {
    part_id: "WP_SR032",
    lang_id: 19032,
    part_name: "MSK-SR200",
    part_type: "light_arms", // sniper rifle
    faction: "B",
    price: 10000
  },
  {
    part_id: "WP_SR061",
    lang_id: 19061,
    part_name: "SpR-Aruzz",
    part_type: "light_arms", // sniper rifle
    faction: "C",
    price: 5000
  },
  {
    part_id: "WP_SR062",
    lang_id: 19062,
    part_name: "SpR-Ruzz",
    part_type: "light_arms", // sniper rifle
    faction: "C",
    price: 4000
  },
  {
    part_id: "WP_AR001",
    lang_id: 20001,
    part_name: "M06AR Baselard",
    part_type: "light_arms", // assault rifle
    faction: "A",
    price: 6000
  },
  {
    part_id: "WP_AR002",
    lang_id: 20002,
    part_name: "M19AR Cutlass",
    part_type: "light_arms", // assault rifle
    faction: "A",
    price: 6500
  },
  {
    part_id: "WP_AR003",
    lang_id: 20003,
    part_name: "M34AR Hanger",
    part_type: "light_arms", // assault rifle
    faction: "A",
    price: null
  },
  {
    part_id: "WP_AR031",
    lang_id: 20031,
    part_name: "MSK-AR100",
    part_type: "light_arms", // assault rifle
    faction: "B",
    price: 6750
  },
  {
    part_id: "WP_AR032",
    lang_id: 20032,
    part_name: "MSK-AR200",
    part_type: "light_arms", // assault rifle
    faction: "B",
    price: 7500
  },
  {
    part_id: "WP_AR061",
    lang_id: 20061,
    part_name: "AsR-Thuban",
    part_type: "light_arms", // assault rifle
    faction: "C",
    price: 6500
  },
  {
    part_id: "WP_AR062",
    lang_id: 20062,
    part_name: "AsR-Timsah",
    part_type: "light_arms", // assault rifle
    faction: "C",
    price: 7000
  },
  {
    part_id: "WP_MG001",
    lang_id: 21001,
    part_name: "M18MG Stylet",
    part_type: "light_arms", // machine gun
    faction: "A",
    price: 6500
  },
  {
    part_id: "WP_MG002",
    lang_id: 21002,
    part_name: "M07MG Dagger",
    part_type: "light_arms", // machine gun
    faction: "A",
    price: 8000
  },
  {
    part_id: "WP_MG031",
    lang_id: 21031,
    part_name: "MSK-MG100",
    part_type: "light_arms", // machine gun
    faction: "B",
    price: 6750
  },
  {
    part_id: "WP_MG061",
    lang_id: 21061,
    part_name: "Mcg-Hamama",
    part_type: "light_arms", // machine gun
    faction: "C",
    price: 5500
  },
  {
    part_id: "WP_MG062",
    lang_id: 21062,
    part_name: "Mcg-Hajal",
    part_type: "light_arms", // machine gun
    faction: "C",
    price: null
  },
  {
    part_id: "WP_ST001",
    lang_id: 22001,
    part_name: "M08SG Club",
    part_type: "light_arms", // shotgun
    faction: "A",
    price: 8000
  },
  {
    part_id: "WP_ST002",
    lang_id: 22002,
    part_name: "M24SG Mace",
    part_type: "light_arms", // shotgun
    faction: "A",
    price: 8500
  },
  {
    part_id: "WP_ST031",
    lang_id: 22031,
    part_name: "MSK-SG100",
    part_type: "light_arms", // shotgun
    faction: "B",
    price: 9000
  },
  {
    part_id: "WP_ST032",
    lang_id: 22032,
    part_name: "MSK-SG200/D",
    part_type: "light_arms", // shotgun
    faction: "B",
    price: 11500
  },
  {
    part_id: "WP_ST033",
    lang_id: 22033,
    part_name: "MSK-SG101",
    part_type: "light_arms", // shotgun
    faction: "B",
    price: 10000
  },
  {
    part_id: "WP_ST061",
    lang_id: 22061,
    part_name: "Stg-Burum",
    part_type: "light_arms", // shotgun
    faction: "C",
    price: 8000
  },
  {
    part_id: "WP_GL001",
    lang_id: 23001,
    part_name: "M09GL Adze",
    part_type: "light_arms", // grenade
    faction: "A",
    price: 5000
  },
  {
    part_id: "WP_GL002",
    lang_id: 23002,
    part_name: "M30GL Axe",
    part_type: "light_arms", // grenade
    faction: "A",
    price: 5500
  },
  {
    part_id: "WP_GL031",
    lang_id: 23031,
    part_name: "MSK-GL10",
    part_type: "light_arms", // grenade
    faction: "B",
    price: 6750
  },
  {
    part_id: "WP_GL061",
    lang_id: 23061,
    part_name: "Grl-Mushmis",
    part_type: "light_arms", // grenade
    faction: "C",
    price: 4500
  },
  {
    part_id: "WP_GL062",
    lang_id: 23062,
    part_name: "Grl-Ghaim",
    part_type: "light_arms", // grenade
    faction: "C",
    price: null
  },
  {
    part_id: "WP_GL063",
    lang_id: 23063,
    part_name: "Grl-Mumtir",
    part_type: "light_arms", // grenade
    faction: "C",
    price: 6500
  },
  {
    part_id: "WP_CR001",
    lang_id: 24001,
    part_name: "M09HT Spear",
    part_type: "light_arms", // heat rocket
    faction: "A",
    price: 8000
  },
  {
    part_id: "WP_CR002",
    lang_id: 24002,
    part_name: "M33HT Partisan",
    part_type: "light_arms", // heat rocket
    faction: "A",
    price: 9000
  },
  {
    part_id: "WP_CR031",
    lang_id: 24031,
    part_name: "MSK-HT10",
    part_type: "light_arms", // heat rocket
    faction: "B",
    price: 7000
  },
  {
    part_id: "WP_CR061",
    lang_id: 24061,
    part_name: "HTR-Jazar",
    part_type: "light_arms", // heat rocket
    faction: "C",
    price: 8000
  },
  {
    part_id: "WP_CR062",
    lang_id: 24062,
    part_name: "HTR-Khiyar",
    part_type: "light_arms", // heat rocket
    faction: "C",
    price: 9500
  },
  {
    part_id: "WP_CR063",
    lang_id: 24063,
    part_name: "HTR-Tamatim",
    part_type: "light_arms", // heat rocket
    faction: "C",
    price: null
  },
  {
    part_id: "WP_CP001",
    lang_id: 25001,
    part_name: "M10HP Lance",
    part_type: "light_arms", // anti hound pile
    faction: "A",
    price: 11000
  },
  {
    part_id: "WP_CP002",
    lang_id: 25002,
    part_name: "M32HP Ballista",
    part_type: "light_arms", // anti hound pile
    faction: "A",
    price: 12500
  },
  {
    part_id: "WP_CP031",
    lang_id: 25031,
    part_name: "MSK-HP100",
    part_type: "light_arms", // anti hound pile
    faction: "B",
    price: 14000
  },
  {
    part_id: "WP_CP061",
    lang_id: 25061,
    part_name: "AHP-Ras",
    part_type: "light_arms", // anti hound pile
    faction: "C",
    price: 10000
  },
  {
    part_id: "WP_CP062",
    lang_id: 25062,
    part_name: "AHP-Sharib",
    part_type: "light_arms", // anti hound pile
    faction: "C",
    price: null
  },
  {
    part_id: "WP_CP063",
    lang_id: 25063,
    part_name: "AHP-Lihya",
    part_type: "light_arms", // anti hound pile
    faction: "C",
    price: 13000
  },
  {
    part_id: "WP_LM001",
    lang_id: 26001,
    part_name: "M11LM Claymore",
    part_type: "light_arms", // land mine
    faction: "A",
    price: 7500
  },
  {
    part_id: "WP_LM031",
    lang_id: 26031,
    part_name: "MSK-LM100",
    part_type: "light_arms", // land mine
    faction: "B",
    price: 6500
  },
  {
    part_id: "WP_LM032",
    lang_id: 26032,
    part_name: "MSK-LM200",
    part_type: "light_arms", // land mine
    faction: "B",
    price: 7000
  },
  {
    part_id: "WP_LM061",
    lang_id: 26061,
    part_name: "LdM-Harshafa",
    part_type: "light_arms", // land mine
    faction: "C",
    price: 8000
  },
  {
    part_id: "WP_LM062",
    lang_id: 26062,
    part_name: "LdM-Zinifa",
    part_type: "light_arms", // land mine
    faction: "C",
    price: 7500
  },
  {
    part_id: "WP_LM063",
    lang_id: 26063,
    part_name: "LdM-Lahm",
    part_type: "light_arms", // land mine
    faction: "C",
    price: 8750
  },
  {
    part_id: "WP_CB001",
    lang_id: 27001,
    part_name: "M12BD Gladius",
    part_type: "light_arms", // bomb dispenser
    faction: "A",
    price: 7000
  },
  {
    part_id: "WP_CB002",
    lang_id: 27002,
    part_name: "M23BD Walloon",
    part_type: "light_arms", // bomb dispenser
    faction: "A",
    price: 7500
  },
  {
    part_id: "WP_CB031",
    lang_id: 27031,
    part_name: "MSK-BD100",
    part_type: "light_arms", // bomb dispenser
    faction: "B",
    price: 8000
  },
  {
    part_id: "WP_CB061",
    lang_id: 27061,
    part_name: "BmD-Sardin",
    part_type: "light_arms", // bomb dispenser
    faction: "C",
    price: 8250
  },
  {
    part_id: "WP_CB062",
    lang_id: 27062,
    part_name: "BmD-Salmun",
    part_type: "light_arms", // bomb dispenser
    faction: "C",
    price: 8500
  },
  {
    part_id: "WP_CB063",
    lang_id: 27063,
    part_name: "BmD-Samakumusa",
    part_type: "light_arms", // bomb dispenser
    faction: "C",
    price: 9000
  },
  {
    part_id: "WP_CB064",
    lang_id: 27064,
    part_name: "BmD-Sadaf",
    part_type: "light_arms", // bomb dispenser
    faction: "C",
    price: 8750
  },
  {
    part_id: "WP_RL002",
    lang_id: 28002,
    part_name: "M13RL Halberd",
    part_type: "light_arms", // rocket
    faction: "A",
    price: 11500
  },
  {
    part_id: "WP_RL033",
    lang_id: 28033,
    part_name: "MSK-RL100",
    part_type: "light_arms", // rocket
    faction: "B",
    price: 12500
  },
  {
    part_id: "WP_RL034",
    lang_id: 28034,
    part_name: "MSK-RL200",
    part_type: "light_arms", // rocket
    faction: "B",
    price: 15000
  },
  {
    part_id: "WP_RL061",
    lang_id: 28061,
    part_name: "Rtl-Khass",
    part_type: "light_arms", // rocket
    faction: "C",
    price: 12000
  },
  {
    part_id: "WP_RL062",
    lang_id: 28062,
    part_name: "Rtl-Kurunb",
    part_type: "light_arms", // rocket
    faction: "C",
    price: 13000
  },
  {
    part_id: "WH_LR001",
    lang_id: 29001,
    part_name: "M15HR Guisarme",
    part_type: "heavy_arms", // huge rocket
    faction: "A",
    price: 12500
  },
  {
    part_id: "WH_LR002",
    lang_id: 29002,
    part_name: "M29HR Trident",
    part_type: "heavy_arms", // huge rocket
    faction: "A",
    price: 14000
  },
  {
    part_id: "WH_LR031",
    lang_id: 29031,
    part_name: "MSK-HR1000",
    part_type: "heavy_arms", // huge rocket
    faction: "B",
    price: 15000
  },
  {
    part_id: "WH_LR032",
    lang_id: 29032,
    part_name: "MSK-HR1001",
    part_type: "heavy_arms", // huge rocket
    faction: "B",
    price: null
  },
  {
    part_id: "WH_LR061",
    lang_id: 29061,
    part_name: "HRl-Basal",
    part_type: "heavy_arms", // huge rocket
    faction: "C",
    price: 14500
  },
  {
    part_id: "WH_MS001",
    lang_id: 30001,
    part_name: "M14MS Javelin",
    part_type: "heavy_arms", // missile
    faction: "A",
    price: 15000
  },
  {
    part_id: "WH_MS002",
    lang_id: 30002,
    part_name: "M26MS Tomahawk",
    part_type: "heavy_arms", // missile
    faction: "A",
    price: 16500
  },
  {
    part_id: "WH_MS031",
    lang_id: 30031,
    part_name: "MSK-MS1000",
    part_type: "heavy_arms", // missile
    faction: "B",
    price: 14500
  },
  {
    part_id: "WH_MS032",
    lang_id: 30032,
    part_name: "MSK-MS1500",
    part_type: "heavy_arms", // missile
    faction: "B",
    price: 16000
  },
  {
    part_id: "WH_MS033",
    lang_id: 30033,
    part_name: "MSK-MS1001",
    part_type: "heavy_arms", // missile
    faction: "B",
    price: null
  },
  {
    part_id: "WH_MS034",
    lang_id: 30034,
    part_name: "MSK-MS1501",
    part_type: "heavy_arms", // missile
    faction: "B",
    price: 17500
  },
  {
    part_id: "WH_MS061",
    lang_id: 30061,
    part_name: "Msl-Khadrawat",
    part_type: "heavy_arms", // missile
    faction: "C",
    price: 14000
  },
  {
    part_id: "CP_MC001",
    lang_id: 73001,
    part_name: "M01MC Russell",
    part_type: "system_device", // main computer
    faction: "A",
    price: 4000
  },
  {
    part_id: "CP_MC002",
    lang_id: 73002,
    part_name: "M02MC Neumann",
    part_type: "system_device", // main computer
    faction: "A",
    price: 4500
  },
  {
    part_id: "CP_MC031",
    lang_id: 73031,
    part_name: "MSK-MC1000",
    part_type: "system_device", // main computer
    faction: "B",
    price: 3500
  },
  {
    part_id: "CP_MC032",
    lang_id: 73032,
    part_name: "MSK-MC1500",
    part_type: "system_device", // main computer
    faction: "B",
    price: 3750
  },
  {
    part_id: "CP_MC061",
    lang_id: 73061,
    part_name: "MC-Wahid",
    part_type: "system_device", // main computer
    faction: "C",
    price: 4500
  },
  {
    part_id: "CP_MC062",
    lang_id: 73062,
    part_name: "MC-Arbaa",
    part_type: "system_device", // main computer
    faction: "C",
    price: 5500
  },
  {
    part_id: "CP_MC063",
    lang_id: 73063,
    part_name: "MC-Saba",
    part_type: "system_device", // main computer
    faction: "C",
    price: 6000
  },
  {
    part_id: "CP_AS001",
    lang_id: 73201,
    part_name: "M01TC Bardeen",
    part_type: "system_device", // tactical computer
    faction: "A",
    price: 4000
  },
  {
    part_id: "CP_AS002",
    lang_id: 73202,
    part_name: "M02TC Brattain",
    part_type: "system_device", // tactical computer
    faction: "A",
    price: 4500
  },
  {
    part_id: "CP_AS031",
    lang_id: 73231,
    part_name: "MSK-TC1000",
    part_type: "system_device", // tactical computer
    faction: "B",
    price: 5500
  },
  {
    part_id: "CP_AS032",
    lang_id: 73232,
    part_name: "MSK-TC1500",
    part_type: "system_device", // tactical computer
    faction: "B",
    price: 5000
  },
  {
    part_id: "CP_AS033",
    lang_id: 73233,
    part_name: "MSK-TC2000",
    part_type: "system_device", // tactical computer
    faction: "B",
    price: 6000
  },
  {
    part_id: "CP_AS061",
    lang_id: 73261,
    part_name: "TC-Ithnan",
    part_type: "system_device", // tactical computer
    faction: "C",
    price: 4500
  },
  {
    part_id: "CP_AS062",
    lang_id: 73262,
    part_name: "TC-Sitta",
    part_type: "system_device", // tactical computer
    faction: "C",
    price: 4250
  },
  {
    part_id: "CP_CT001",
    lang_id: 73401,
    part_name: "M01RC Hopper",
    part_type: "system_device", // RC
    faction: "A",
    price: 5000
  },
  {
    part_id: "CP_CT002",
    lang_id: 73402,
    part_name: "M02RC Backus",
    part_type: "system_device", // RC
    faction: "A",
    price: 5500
  },
  {
    part_id: "CP_CT003",
    lang_id: 73403,
    part_name: "M03RC Mccarthy",
    part_type: "system_device", // RC
    faction: "A",
    price: 5750
  },
  {
    part_id: "CP_CT031",
    lang_id: 73431,
    part_name: "MSK-RC1000",
    part_type: "system_device", // RC
    faction: "B",
    price: 4500
  },
  {
    part_id: "CP_CT032",
    lang_id: 73432,
    part_name: "MSK-RC1500",
    part_type: "system_device", // RC
    faction: "B",
    price: 4250
  },
  {
    part_id: "CP_CT061",
    lang_id: 73461,
    part_name: "RC-Thalatha",
    part_type: "system_device", // RC
    faction: "C",
    price: 3500
  },
  {
    part_id: "CP_CT062",
    lang_id: 73462,
    part_name: "RC-Khamsa",
    part_type: "system_device", // RC
    faction: "C",
    price: 4000
  }
];

export const PARTS_BY_ID: ReadonlyMap<string, Part> = new Map(
  PARTS.map((part) => [part.part_id, part]),
);

export function getPartById(partId: string): Part | undefined {
  return PARTS_BY_ID.get(partId);
}

export function getPartsByFaction(faction: string): Part[] {
  const code = faction.toUpperCase();
  return PARTS.filter((part) => part.faction === code);
}
