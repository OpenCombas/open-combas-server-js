export interface MapVariant {
  id: string;
  name: string;
}

export interface Map {
  areaId: number;
  faction: string;
  debug_name: string;
  area_name?: string;
  variants: MapVariant[];
}

export const MAPS: Map[] = [
  {
    "areaId": 1,
    "faction": "A",
    "area_name": "Xeres",
    "debug_name": "Country A Capital (Ａ国首都)",
    "variants": [
      {
        "id": "m01_001",
        "name": "District A Evening Clear River (Ａ地区　夕晴 河)"
      },
      {
        "id": "m01_002", 
        "name": "District B Day Cloudy River (Ｂ地区　昼曇　河)"
      },
      {
        "id": "m01_003",
        "name": "District C Night Cloudy (Ｃ地区　夜曇)"
      },
      {
        "id": "m01_004",
        "name": "District D Morning Fog (Ｄ地区　朝霧)"
      }
    ]
  },
  {
    "areaId": 2,
    "faction": "B",
    "area_name": "Ostrov",
    "debug_name": "Country B Capital (Ｂ国首都)",
    "variants": [
      {
        "id": "m02_001",
        "name": "District A Day Snow (Ａ地区　昼雪)"
      },
      {
        "id": "m02_002",
        "name": "District B Evening Cloudy (Ｂ地区　夕曇)"
      },
      {
        "id": "m02_003",
        "name": "District C Night Cloudy (Ｃ地区　夜曇)"
      },
      {
        "id": "m02_004",
        "name": "District D Day Blizzard (Ｄ地区　昼吹雪)"
      }
    ]
  },
  {
    "areaId": 3,
    "faction": "C",
    "area_name": "Qara",
    "debug_name": "Country C Capital (Ｃ国首都)",
    "variants": [
      {
        "id": "m03_001",
        "name": "District A Evening Clear River (Ａ地区　夕晴　河)"
      },
      {
        "id": "m03_002",
        "name": "District B Day Clear (Ｂ地区　昼晴)"
      },
      {
        "id": "m03_003",
        "name": "District C Night Clear River (Ｃ地区　夜晴　河)"
      }
    ]
  },
  {
    "areaId": 4,
    "faction": "B",
    "debug_name": "Country B Fortress (Ｂ国城砦)",
    "variants": [
      {
        "id": "m04_001",
        "name": "Fortress 1 (城砦１)"
      },
      {
        "id": "m04_002",
        "name": "Fortress 2 (城砦２)"
      },
      {
        "id": "m04_003",
        "name": "Fortress 3 (城砦３)"
      }
    ]
  },
  {
    "areaId": 5,
    "faction": "B",
    "debug_name": "Country B Dam (Ｂ国ダム)",
    "variants": [
      {
        "id": "m05_001",
        "name": "Dam 1 (ダム１)"
      },
      {
        "id": "m05_002",
        "name": "Dam 2 (ダム２)"
      },
      {
        "id": "m05_003",
        "name": "Dam 3 (ダム３)"
      }
    ]
  },
  {
    "areaId": 6,
    "faction": "B",
    "debug_name": "Country B Snow Mountain (Ｂ国雪山)",
    "variants": [
      {
        "id": "m06_001",
        "name": "Guerrilla Base Ruins (ケリラ基地跡)"
      },
      {
        "id": "m06_002",
        "name": "Checkpoint and Rocky Area (検問所と岩場)"
      },
      {
        "id": "m06_003",
        "name": "Guerrilla Village (ケリラ村)"
      },
      {
        "id": "m06_004",
        "name": "Guerrilla Forest and Spring (ゲリラの森と泉)"
      }
    ]
  },
  {
    "areaId": 7,
    "faction": "B",
    "debug_name": "Country B Fortress Alt (Ｂ国城砦)",
    "variants": [
      {
        "id": "m07_001",
        "name": "Fortress 1 (城砦１)"
      },
      {
        "id": "m07_002",
        "name": "Fortress 2 (城砦２)"
      },
      {
        "id": "m07_003",
        "name": "Fortress 3 (城砦３)"
      }
    ]
  },
  {
    "areaId": 8,
    "faction": "B",
    "debug_name": "Country B Highland (Ｂ国高山)",
    "variants": [
      {
        "id": "m08_001",
        "name": "Highland 1 (高山１)"
      },
      {
        "id": "m08_002",
        "name": "Highland 2 (高山２)"
      },
      {
        "id": "m08_003",
        "name": "Highland 3 (高山３)"
      },
      {
        "id": "m08_004",
        "name": "Highland 4 Rain and Clouds (高山４　雨と雲)"
      }
    ]
  },
  {
    "areaId": 9,
    "faction": "A",
    "debug_name": "Country A Mountain (Ａ国山岳)",
    "variants": [
      {
        "id": "m09_001",
        "name": "Many Roads (道が多め)"
      },
      {
        "id": "m09_002",
        "name": "Bridge (橋)"
      },
      {
        "id": "m09_003",
        "name": "River (川)"
      },
      {
        "id": "m09_004",
        "name": "Many Tunnels (トンネルたくさん)"
      }
    ]
  },
  {
    "areaId": 10,
    "faction": "A",
    "debug_name": "Country A Mountain Ruins (Ａ国山岳廃墟)",
    "variants": [
      {
        "id": "m10_001",
        "name": "Mountain Ruins 1 (山岳廃墟１)"
      },
      {
        "id": "m10_002",
        "name": "Mountain Ruins 2 (山岳廃墟２)"
      },
      {
        "id": "m10_003",
        "name": "Mountain Ruins 3 (山岳廃墟３)"
      },
      {
        "id": "m10_004",
        "name": "Mountain Ruins 4 (山岳廃墟４)"
      }
    ]
  },
  {
    "areaId": 11,
    "faction": "A",
    "debug_name": "Country A Suburb (Ａ国郊外)",
    "variants": [
      {
        "id": "m11_001",
        "name": "Town and Factory Just After Sunset (町と工場　日没直後)"
      },
      {
        "id": "m11_002",
        "name": "Town (町)"
      },
      {
        "id": "m11_003",
        "name": "Fields (畑)"
      },
      {
        "id": "m11_004",
        "name": "Hills Overlooking Town (町を臨む丘陵)"
      }
    ]
  },
  {
    "areaId": 12,
    "faction": "A",
    "debug_name": "Country A Rural (Ａ国農村)",
    "variants": [
      {
        "id": "m12_001",
        "name": "Residential District (住宅地区)"
      },
      {
        "id": "m12_002",
        "name": "Rain (雨)"
      },
      {
        "id": "m12_003",
        "name": "Sunset (夕日)"
      },
      {
        "id": "m12_004",
        "name": "Lake (湖)"
      }
    ]
  },
  {
    "areaId": 13,
    "faction": "A",
    "debug_name": "Country A Factory (Ａ国工場)",
    "variants": [
      {
        "id": "m13_001",
        "name": "Evening 17:00 Light Clouds (夕17:00薄曇)"
      },
      {
        "id": "m13_002",
        "name": "Night 0:00 Cloudy (夜0:00曇)"
      },
      {
        "id": "m13_003",
        "name": "Day 14:00 Clear, Night 22:40 Clear (昼14:00晴,夜22:40晴)"
      }
    ]
  },
  {
    "areaId": 14,
    "faction": "A",
    "debug_name": "Country A Coast (Ａ国海岸)",
    "variants": [
      {
        "id": "m14_001",
        "name": "Naval Port (軍港)"
      },
      {
        "id": "m14_002",
        "name": "Canal (運河)"
      },
      {
        "id": "m14_003",
        "name": "Storage Area (貯蔵区)"
      }
    ]
  },
  {
    "areaId": 15,
    "faction": "A",
    "debug_name": "Country A Snowfield (Ａ国雪原)",
    "variants": [
      {
        "id": "m15_001",
        "name": "Base (基地)"
      },
      {
        "id": "m15_002",
        "name": "Snow Forest (雪の森林)"
      },
      {
        "id": "m15_003",
        "name": "Snow Hills Night (雪の丘陵　夜)"
      },
      {
        "id": "m15_004",
        "name": "Snowfield 4 (雪原４)"
      }
    ]
  },
  {
    "areaId": 16,
    "faction": "B",
    "debug_name": "Country B Lakeside (Ｂ国湖岸)",
    "variants": [
      {
        "id": "m16_001",
        "name": "Small Lakeside Town (湖畔の小さな町)"
      },
      {
        "id": "m16_002",
        "name": "Lake and Small Island (湖と小島)"
      },
      {
        "id": "m16_003",
        "name": "Forest and Lake (森林と湖)"
      }
    ]
  },
  {
    "areaId": 17,
    "faction": "B",
    "debug_name": "Country B Railway (Ｂ国鉄道)",
    "variants": [
      {
        "id": "m17_001",
        "name": "Railway Town (鉄道の街)"
      },
      {
        "id": "m17_002",
        "name": "Gregory's Town (グレゴリーの街)"
      },
      {
        "id": "m17_003",
        "name": "Forest Night (森林　夜)"
      },
      {
        "id": "m17_004",
        "name": "Forest Railway (森の鉄道)"
      }
    ]
  },
  {
    "areaId": 18,
    "faction": "C",
    "debug_name": "Country C Wasteland (Ｃ国荒地)",
    "variants": [
      {
        "id": "m18_001",
        "name": "Oil Extraction Facility Day 16:00 Light Clouds (採油施設　昼16:00薄曇)"
      },
      {
        "id": "m18_002",
        "name": "Day 10:00 Clear (昼10:00晴)"
      },
      {
        "id": "m18_003",
        "name": "Night 19:00 Light Clouds, Evening, Morning 8:45 Light Clouds (夜19:00薄曇,夕方,朝8:45薄曇)"
      },
      {
        "id": "m18_004",
        "name": "Day 14:00 Clear, Evening 17:00 Clear (昼14:00晴,夕17:00晴)"
      }
    ]
  },
  {
    "areaId": 19,
    "faction": "C",
    "debug_name": "Country C River (Ｃ国河川)",
    "variants": [
      {
        "id": "m19_001",
        "name": "Day 10:00 Light Clouds (昼10:00薄曇)"
      },
      {
        "id": "m19_002",
        "name": "Evening 18:00 Light Clouds, Night 2:25 Cloudy (夕18:00薄曇,夜2:25曇)"
      },
      {
        "id": "m19_003",
        "name": "Day 15:00 Rain (昼15:00雨)"
      }
    ]
  },
  {
    "areaId": 20,
    "faction": "C",
    "debug_name": "Country C Desert Ruins (Ｃ国砂漠の廃墟)",
    "variants": [
      {
        "id": "m20_001",
        "name": "Coal Mine Ruins Day 11:00 Light Clouds (炭鉱廃墟　昼11:00薄曇)"
      },
      {
        "id": "m20_002",
        "name": "Evening 17:00 Clear (夕17:00晴)"
      },
      {
        "id": "m20_003",
        "name": "Day 12:00 Cloudy (昼12:00曇)"
      },
      {
        "id": "m20_004",
        "name": "Day 13:00 Sandstorm (昼13:00砂嵐)"
      }
    ]
  },
  {
    "areaId": 21,
    "faction": "C",
    "debug_name": "Country C Desert Town (Ｃ国砂漠の町)",
    "variants": [
      {
        "id": "m21_001",
        "name": "Day 13:00 Cloudy (昼13:00曇)"
      },
      {
        "id": "m21_002",
        "name": "Defense Line Night 19:00 Cloudy (防衛ライン　夜19:00曇)"
      },
      {
        "id": "m21_003",
        "name": "Valley Day 11:00 Cloudy (谷　昼11:00曇)"
      },
      {
        "id": "m21_004",
        "name": "Fault Line Evening 17:00 Clear (断層　夕17:00晴)"
      }
    ]
  },
  {
    "areaId": 22,
    "faction": "C",
    "debug_name": "Country C Desert (Ｃ国砂漠)",
    "variants": [
      {
        "id": "m22_001",
        "name": "Gas Drilling Site Day 12:00 Clear (ガス採掘場　昼12:00晴)"
      },
      {
        "id": "m22_002",
        "name": "Night 3:00 Clear, Evening 17:35 Sandstorm (夜3:00晴,夕17:35砂嵐)"
      },
      {
        "id": "m22_003",
        "name": "Vast Desert Day 12:00 Clear (広大な砂漠　昼12:00晴)"
      },
      {
        "id": "m22_004",
        "name": "Mining Site Area Evening 17:00 Clear (採掘場周辺　夕17:00晴)"
      }
    ]
  },
  {
    "areaId": 0,
    "faction": "X",
    "debug_name": "Debug/Reference Maps",
    "variants": [
      {
        "id": "m00_000",
        "name": "Parameter Reference Skeleton (パラメータ参照用スケルトン)"
      },
      {
        "id": "m00_001",
        "name": "Country A Capital Old (Ａ国首都その１（旧）)"
      }
    ]
  },
  {
    "areaId": 70,
    "faction": "X",
    "debug_name": "Local Opening Maps (ローカルOP用)",
    "variants": [
      {
        "id": "m70_000",
        "name": "Local OP First Half (ローカルOP用（前半）)"
      },
      {
        "id": "m70_001",
        "name": "Local OP Second Half (ローカルOP用（後半）)"
      }
    ]
  },
  {
    "areaId": 80,
    "faction": "X",
    "debug_name": "AC Maps (ACマップ)",
    "variants": [
      {
        "id": "m80_001",
        "name": "AC Map (ACマップ)"
      },
      {
        "id": "m80_002",
        "name": "AC Map CG Use (ACマップ　CG用)"
      },
      {
        "id": "m80_003",
        "name": "AC Map Start (ACマップ　最初)"
      },
      {
        "id": "m80_004",
        "name": "AC Map End (ACマップ　締め)"
      },
      {
        "id": "m80_005",
        "name": "AC (AC)"
      }
    ]
  },
  {
    "areaId": 98,
    "faction": "X",
    "debug_name": "Development Test Maps",
    "variants": [
      {
        "id": "m98_001",
        "name": "tabc Test 01 (tabcテスト01)"
      },
      {
        "id": "m98_002",
        "name": "tabc Test 02 (tabcテスト02)"
      },
      {
        "id": "m98_003",
        "name": "Planning Test 03 (企画テスト03)"
      },
      {
        "id": "m98_004",
        "name": "tabc Test 04 ACV Test (tabcテスト04＠ACVテスト)"
      },
      {
        "id": "m98_024",
        "name": "Planning Experiment tabc (企画実験中tabc)"
      }
    ]
  },
  {
    "areaId": 99,
    "faction": "X",
    "debug_name": "Developer Test Maps",
    "variants": [
      {
        "id": "m99_001",
        "name": "Ando Testing (安藤テスト中)"
      },
      {
        "id": "m99_002",
        "name": "m99_002 (m99_002)"
      },
      {
        "id": "m99_003",
        "name": "Hit Testing (ヒット関係テスト用)"
      },
      {
        "id": "m99_005",
        "name": "m99_005 (m99_005)"
      },
      {
        "id": "m99_011",
        "name": "Yoshida's Map (吉田さんマップ)"
      },
      {
        "id": "m99_012",
        "name": "Display Test (ディスプレイステスト)"
      },
      {
        "id": "m99_013",
        "name": "Nakajima Test (中島テスト)"
      },
      {
        "id": "m99_014",
        "name": "Tree Collection (樹木コレクション)"
      },
      {
        "id": "m99_016",
        "name": "Garage (ガレージ)"
      },
      {
        "id": "m99_019",
        "name": "m99_019 (m99_019)"
      },
      {
        "id": "m99_020",
        "name": "Parts Scale Test 1 (パーツスケールテスト１)"
      },
      {
        "id": "m99_021",
        "name": "Parts Scale Test 2 (パーツスケールテスト２)"
      },
      {
        "id": "m99_025",
        "name": "World Map (ワールドマップ)"
      },
      {
        "id": "m99_026",
        "name": "Garage Country A (ガレージ：A国)"
      },
      {
        "id": "m99_027",
        "name": "Garage Country B (ガレージ：B国)"
      },
      {
        "id": "m99_028",
        "name": "Garage Country C (ガレージ：C国)"
      },
      {
        "id": "m99_030",
        "name": "AI Test (AI＿TEST)"
      },
      {
        "id": "m99_031",
        "name": "ACV Ranch (ACV牧場)"
      },
      {
        "id": "m99_032",
        "name": "m06_003 Filming (m06_003撮影用)"
      },
      {
        "id": "m99_100",
        "name": "Plains Region Test (平原領域テスト)"
      },
      {
        "id": "m99_105",
        "name": "Plains Test (平原テスト)"
      },
      {
        "id": "m99_106",
        "name": "Light Map (軽いマップ)"
      },
      {
        "id": "m99_107",
        "name": "Miyauchi Various Test (宮内色々ＴＥＳＴ)"
      },
      {
        "id": "m99_108",
        "name": "Destruction Test (破壊テスト)"
      }
    ]
  }
]