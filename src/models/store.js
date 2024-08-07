export default class Store {
  constructor() {
    this.themes_color = this.colors();
    this.themes_buttons = this.buttons();
  }

  colors() {
    return (this.themes_color = {
      0: {
        id: 5055,
        level: 1,
        preco: 0,
        colors: { main: "#593C39", screen: "#D9B1A3" },
      },
      1: {
        id: 1010,
        level: 1,
        preco: 3,
        colors: { main: "#292C40", screen: "#292C40" },
      },
      2: {
        id: 2020,
        level: 1,
        preco: 5,
        colors: { main: "#8C472E", screen: "#B0C1D9" },
      },
      3: {
        id: 3030,
        level: 3,
        preco: 15,
        colors: { main: "#A6341B", screen: "#0D0D0D" },
      },
      4: {
        id: 4050,
        level: 5,
        preco: 50,
        colors: { main: "#0C0D0C", screen: "#A6A5A1" },
      },
      5: {
        id: 5050,
        level: 6,
        preco: 75,
        colors: { main: "#F2E5BD", screen: "#242F73" },
      },
      6: {
        id: 6060,
        level: 7,
        preco: 100,
        colors: { main: "#3A1F04", screen: "#E1CEB5" },
      },
      7: {
        id: 7070,
        level: 8,
        preco: 125,
        colors: { main: "#071A52", screen: "#AFD2E9" },
      },
      8: {
        id: 8080,
        level: 9,
        preco: 150,
        colors: { main: "#5A3E36", screen: "#FFE9B6" },
      },
      9: {
        id: 9090,
        level: 10,
        preco: 175,
        colors: { main: "#1C0A00", screen: "#F3D3BD" },
      },
      10: {
        id: 5645,
        level: 11,
        preco: 200,
        colors: { main: "#042A2B", screen: "#A2CDB0" },
      },
      11: {
        id: 1111,
        level: 12,
        preco: 225,
        colors: { main: "#F45B69", screen: "#EFF0D1" },
      },
      12: {
        id: 1212,
        level: 13,
        preco: 250,
        colors: { main: "#080708", screen: "#CFDBD5" },
      },
      13: {
        id: 1313,
        level: 14,
        preco: 275,
        colors: { main: "#D72638", screen: "#F46036" },
      },
      14: {
        id: 1414,
        level: 15,
        preco: 300,
        colors: { main: "#07A0C3", screen: "#F4F4F9" },
      },
      15: {
        id: 1515,
        level: 16,
        preco: 325,
        colors: { main: "#1A535C", screen: "#FF6B6B" },
      },
      16: {
        id: 1616,
        level: 17,
        preco: 350,
        colors: { main: "#4ECDC4", screen: "#556270" },
      },
      17: {
        id: 1717,
        level: 18,
        preco: 375,
        colors: { main: "#F7FFF7", screen: "#FFE66D" },
      },
      18: {
        id: 1818,
        level: 19,
        preco: 400,
        colors: { main: "#2A363B", screen: "#E84A5F" },
      },
      19: {
        id: 1919,
        level: 20,
        preco: 425,
        colors: { main: "#FF847C", screen: "#99B898" },
      },
      20: {
        id: 3245,
        level: 21,
        preco: 450,
        colors: { main: "#2A363B", screen: "#FECEA8" },
      },
      21: {
        id: 2121,
        level: 22,
        preco: 475,
        colors: { main: "#332532", screen: "#C0C5C1" },
      },
      22: {
        id: 2222,
        level: 23,
        preco: 500,
        colors: { main: "#D1DBBD", screen: "#91AA9D" },
      },
      23: {
        id: 2323,
        level: 24,
        preco: 525,
        colors: { main: "#3E454C", screen: "#D9CB9E" },
      },
      24: {
        id: 2424,
        level: 25,
        preco: 550,
        colors: { main: "#D9CBA3", screen: "#3B3A36" },
      },
      25: {
        id: 2525,
        level: 26,
        preco: 575,
        colors: { main: "#4A4E4D", screen: "#0E9AA7" },
      },
      26: {
        id: 2626,
        level: 27,
        preco: 600,
        colors: { main: "#3DA4AB", screen: "#F6CD61" },
      },
      27: {
        id: 2727,
        level: 28,
        preco: 625,
        colors: { main: "#FE8A71", screen: "#F4F4F4" },
      },
      28: {
        id: 2828,
        level: 29,
        preco: 650,
        colors: { main: "#C8C8A9", screen: "#F5B7B1" },
      },
      29: {
        id: 2929,
        level: 30,
        preco: 675,
        colors: { main: "#A9A9A9", screen: "#D6D6D6" },
      },
      30: {
        id: 3030,
        level: 31,
        preco: 700,
        colors: { main: "#6B4423", screen: "#C2B280" },
      },
      31: {
        id: 3131,
        level: 32,
        preco: 725,
        colors: { main: "#8C5543", screen: "#FFF1E0" },
      },
      32: {
        id: 3232,
        level: 33,
        preco: 750,
        colors: { main: "#F0A07E", screen: "#6B4226" },
      },
      33: {
        id: 3333,
        level: 34,
        preco: 775,
        colors: { main: "#D9BBA6", screen: "#B2967D" },
      },
      34: {
        id: 3434,
        level: 35,
        preco: 800,
        colors: { main: "#8B4F4A", screen: "#C0B9B2" },
      },
      35: {
        id: 3535,
        level: 36,
        preco: 825,
        colors: { main: "#F1C40F", screen: "#8E44AD" },
      },
      36: {
        id: 3636,
        level: 37,
        preco: 850,
        colors: { main: "#3498DB", screen: "#2C3E50" },
      },
      37: {
        id: 3737,
        level: 38,
        preco: 875,
        colors: { main: "#1ABC9C", screen: "#16A085" },
      },
      38: {
        id: 3838,
        level: 39,
        preco: 900,
        colors: { main: "#27AE60", screen: "#2ECC71" },
      },
      39: {
        id: 3939,
        level: 40,
        preco: 925,
        colors: { main: "#E74C3C", screen: "#C0392B" },
      },
      40: {
        id: 4040,
        level: 41,
        preco: 950,
        colors: { main: "#F39C12", screen: "#E67E22" },
      },
      41: {
        id: 4141,
        level: 42,
        preco: 975,
        colors: { main: "#D35400", screen: "#E74C3C" },
      },
      42: {
        id: 4242,
        level: 43,
        preco: 1000,
        colors: { main: "#9B59B6", screen: "#8E44AD" },
      },
      43: {
        id: 4343,
        level: 44,
        preco: 1025,
        colors: { main: "#2980B9", screen: "#3498DB" },
      },
      44: {
        id: 4444,
        level: 45,
        preco: 1050,
        colors: { main: "#2ECC71", screen: "#27AE60" },
      },
      45: {
        id: 4545,
        level: 46,
        preco: 1075,
        colors: { main: "#E74C3C", screen: "#C0392B" },
      },
      46: {
        id: 4646,
        level: 47,
        preco: 1100,
        colors: { main: "#F39C12", screen: "#E67E22" },
      },
      47: {
        id: 4747,
        level: 48,
        preco: 1125,
        colors: { main: "#D35400", screen: "#E74C3C" },
      },
      48: {
        id: 4848,
        level: 49,
        preco: 1150,
        colors: { main: "#9B59B6", screen: "#8E44AD" },
      },
      49: {
        id: 4949,
        level: 50,
        preco: 1175,
        colors: { main: "#2980B9", screen: "#3498DB" },
      },50: {
        id: 5050,
        level: 51,
        preco: 1200,
        colors: { main: "#505050", screen: "#404040" },
      },
      51: {
        id: 5151,
        level: 52,
        preco: 1225,
        colors: { main: "#606060", screen: "#505050" },
      },
      52: {
        id: 5252,
        level: 53,
        preco: 1250,
        colors: { main: "#707070", screen: "#606060" },
      },
      53: {
        id: 5353,
        level: 54,
        preco: 1275,
        colors: { main: "#808080", screen: "#707070" },
      },
      54: {
        id: 5454,
        level: 55,
        preco: 1300,
        colors: { main: "#909090", screen: "#808080" },
      },
      55: {
        id: 5555,
        level: 56,
        preco: 1325,
        colors: { main: "#303030", screen: "#202020" },
      },
      56: {
        id: 5656,
        level: 57,
        preco: 1350,
        colors: { main: "#404040", screen: "#303030" },
      },
      57: {
        id: 5757,
        level: 58,
        preco: 1375,
        colors: { main: "#505050", screen: "#404040" },
      },
      58: {
        id: 5858,
        level: 59,
        preco: 1400,
        colors: { main: "#606060", screen: "#505050" },
      },
      59: {
        id: 5959,
        level: 60,
        preco: 1425,
        colors: { main: "#707070", screen: "#606060" },
      },
      60: {
        id: 6060,
        level: 61,
        preco: 1450,
        colors: { main: "#808080", screen: "#707070" },
      },
      60: {
        id: 6060,
        level: 61,
        preco: 1450,
        colors: { main: "#E0E0E0", screen: "#D0D0D0" },
      },70: {
        id: 7070,
        level: 71,
        preco: 1700,
        colors: { main: "#39FF14", screen: "#0FF0FC" },
      },
      71: {
        id: 7171,
        level: 72,
        preco: 1725,
        colors: { main: "#FF073A", screen: "#FFDD00" },
      },
      72: {
        id: 7272,
        level: 73,
        preco: 1750,
        colors: { main: "#0FF0FC", screen: "#39FF14" },
      },
      73: {
        id: 7373,
        level: 74,
        preco: 1775,
        colors: { main: "#FFDD00", screen: "#FF073A" },
      },
      74: {
        id: 7474,
        level: 75,
        preco: 1800,
        colors: { main: "#39FF14", screen: "#0FF0FC" },
      },
      75: {
        id: 7575,
        level: 76,
        preco: 1825,
        colors: { main: "#FF073A", screen: "#FFDD00" },
      },
      76: {
        id: 7676,
        level: 77,
        preco: 1850,
        colors: { main: "#0FF0FC", screen: "#39FF14" },
      },
      77: {
        id: 7777,
        level: 78,
        preco: 1875,
        colors: { main: "#FFDD00", screen: "#FF073A" },
      },
      78: {
        id: 7878,
        level: 79,
        preco: 1900,
        colors: { main: "#39FF14", screen: "#0FF0FC" },
      },
      79: {
        id: 7979,
        level: 80,
        preco: 1925,
        colors: { main: "#FF073A", screen: "#FFDD00" },
      },
      80: {
        id: 8080,
        level: 81,
        preco: 1950,
        colors: { main: "#0FF0FC", screen: "#39FF14" },
      },
    });
  }

  buttons() {
    return this.themes_buttons = {
      0: {
        id: 5055,
        level: 1,
        preco: 0,
        colors: { analogic: '#595959', innerAnalogic: '#262626', buttonA: '#A62483', buttonX: '#A62483', buttonB: '#699EBF', buttonY: '#5E92BF' },
      },
      1: {
        id: 6012,
        level: 2,
        preco: 5,
        colors: { analogic: '#F2BBB6', innerAnalogic: '#F21616', buttonA: '#F24150', buttonX: '#F24150', buttonB: '#F2E8DF', buttonY: '#F2E8DF' },
      },
      2: {
        id: 7078,
        level: 3,
        preco: 10,
        colors: { analogic: '#6E7DAB', innerAnalogic: '#364156', buttonA: '#A1B2C3', buttonX: '#A1B2C3', buttonB: '#485A6E', buttonY: '#7389A5' },
      },
      3: {
        id: 8085,
        level: 4,
        preco: 15,
        colors: { analogic: '#B4D5F0', innerAnalogic: '#628BB3', buttonA: '#8AA5CF', buttonX: '#8AA5CF', buttonB: '#A4C1E5', buttonY: '#C1D8F3' },
      },
      4: {
        id: 9092,
        level: 5,
        preco: 20,
        colors: { analogic: '#F0E3BB', innerAnalogic: '#F0BB72', buttonA: '#F0C78C', buttonX: '#F0C78C', buttonB: '#F0D4A4', buttonY: '#F0E3BB' },
      },
      5: {
        id: 10109,
        level: 6,
        preco: 25,
        colors: { analogic: '#A2D5C6', innerAnalogic: '#568C7D', buttonA: '#82B4A1', buttonX: '#82B4A1', buttonB: '#94C1B0', buttonY: '#A2D5C6' },
      },
      6: {
        id: 11116,
        level: 7,
        preco: 30,
        colors: { analogic: '#D5C6A2', innerAnalogic: '#8C7D56', buttonA: '#B89494', buttonX: '#B89494', buttonB: '#CCA5A5', buttonY: '#D9B5B5' },
      },
      7: {
        id: 12123,
        level: 8,
        preco: 35,
        colors: { analogic: '#C6A2D5', innerAnalogic: '#7D568C', buttonA: '#A182B4', buttonX: '#A182B4', buttonB: '#B094C1', buttonY: '#C6A2D5' },
      },
      8: {
        id: 13130,
        level: 9,
        preco: 40,
        colors: { analogic: '#A2C6D5', innerAnalogic: '#568C9D', buttonA: '#82A1B4', buttonX: '#82A1B4', buttonB: '#94B0C1', buttonY: '#A2C6D5' },
      },
      9: {
        id: 14137,
        level: 10,
        preco: 45,
        colors: { analogic: '#F2C5BB', innerAnalogic: '#F26E5A', buttonA: '#F29787', buttonX: '#F29787', buttonB: '#F2B5A3', buttonY: '#F2D8D2' },
      },
      10: {
        id: 15144,
        level: 11,
        preco: 50,
        colors: { analogic: '#D4A5A5', innerAnalogic: '#A57D7D', buttonA: '#B89494', buttonX: '#B89494', buttonB: '#CCA5A5', buttonY: '#D9B5B5' },
      },
      11: {
        id: 16151,
        level: 12,
        preco: 55,
        colors: { analogic: '#A5D4CC', innerAnalogic: '#7DA5A1', buttonA: '#008F8C', buttonX: '#BF1F3C', buttonB: '#5EBF6C', buttonY: '#F2A391' },
      },
      12: {
        id: 17158,
        level: 13,
        preco: 60,
        colors: { analogic: '#A5A5D4', innerAnalogic: '#7D7DA5', buttonA: '#7B68EE', buttonX: '#FF6347', buttonB: '#32CD32', buttonY: '#FFD700' },
      },
      13: {
        id: 18165,
        level: 14,
        preco: 65,
        colors: { analogic: '#D4A5A5', innerAnalogic: '#A57D7D', buttonA: '#FA8072', buttonX: '#3CB371', buttonB: '#20B2AA', buttonY: '#FFE4B5' },
      },
      14: {
        id: 19172,
        level: 15,
        preco: 70,
        colors: { analogic: '#A5D4A5', innerAnalogic: '#7DA57D', buttonA: '#BA55D3', buttonX: '#7B68EE', buttonB: '#FF4500', buttonY: '#FFD700' },
      },
      15: {
        id: 20179,
        level: 16,
        preco: 75,
        colors: { analogic: '#D4C5A5', innerAnalogic: '#A5947D', buttonA: '#48D1CC', buttonX: '#8A2BE2', buttonB: '#FF6347', buttonY: '#FFD700' },
      },
      16: {
        id: 21186,
        level: 17,
        preco: 80,
        colors: { analogic: '#A5D4D4', innerAnalogic: '#7DA5A5', buttonA: '#EE82EE', buttonX: '#32CD32', buttonB: '#FF4500', buttonY: '#FFD700' },
      },
      17: {
        id: 22193,
        level: 18,
        preco: 85,
        colors: { analogic: '#D4A5D4', innerAnalogic: '#A57DA5', buttonA: '#7B68EE', buttonX: '#8A2BE2', buttonB: '#FFD700', buttonY: '#FF6347' },
      },
      18: {
        id: 23200,
        level: 19,
        preco: 90,
        colors: { analogic: '#A5D4A5', innerAnalogic: '#7DA57D', buttonA: '#8A2BE2', buttonX: '#32CD32', buttonB: '#FFD700', buttonY: '#FF4500' },
      },
      19: {
        id: 24207,
        level: 20,
        preco: 95,
        colors: { analogic: '#D4A5A5', innerAnalogic: '#A57D7D', buttonA: '#FA8072', buttonX: '#7B68EE', buttonB: '#FFD700', buttonY: '#3CB371' },
      },
      20: {
        id: 25214,
        level: 21,
        preco: 100,
        colors: { analogic: '#D5A3B8', innerAnalogic: '#8C627A', buttonA: '#A8578A', buttonX: '#BF1F3C', buttonB: '#5EBF6C', buttonY: '#F2A391' },
      },
      21: {
        id: 26221,
        level: 22,
        preco: 105,
        colors: { analogic: '#A5D4CC', innerAnalogic: '#7DA5A1', buttonA: '#8A2BE2', buttonX: '#32CD32', buttonB: '#FF4500', buttonY: '#FFD700' },
      },
      22: {
        id: 27228,
        level: 23,
        preco: 110,
        colors: { analogic: '#A5A5D4', innerAnalogic: '#7D7DA5', buttonA: '#7B68EE', buttonX: '#8A2BE2', buttonB: '#FFD700', buttonY: '#FF6347' },
      },
      23: {
        id: 28235,
        level: 24,
        preco: 115,
        colors: { analogic: '#D4A5A5', innerAnalogic: '#A57D7D', buttonA: '#FA8072', buttonX: '#32CD32', buttonB: '#FFD700', buttonY: '#8A2BE2' },
      },
      24: {
        id: 29242,
        level: 25,
        preco: 120,
        colors: { analogic: '#A5D4A5', innerAnalogic: '#7DA57D', buttonA: '#7B68EE', buttonX: '#FFD700', buttonB: '#32CD32', buttonY: '#FF4500' },
      },
      25: {
        id: 30249,
        level: 26,
        preco: 125,
        colors: { analogic: '#D4C5A5', innerAnalogic: '#A5947D', buttonA: '#8A2BE2', buttonX: '#FF4500', buttonB: '#FFD700', buttonY: '#32CD32' },
      },
      26: {
        id: 31256,
        level: 27,
        preco: 130,
        colors: { analogic: '#A5D4D4', innerAnalogic: '#7DA5A5', buttonA: '#FA8072', buttonX: '#8A2BE2', buttonB: '#FFD700', buttonY: '#32CD32' },
      },
      27: {
        id: 32263,
        level: 28,
        preco: 135,
        colors: { analogic: '#D4A5D4', innerAnalogic: '#A57DA5', buttonA: '#7B68EE', buttonX: '#FFD700', buttonB: '#32CD32', buttonY: '#FF4500' },
      },
      28: {
        id: 33270,
        level: 29,
        preco: 140,
        colors: { analogic: '#A5D4A5', innerAnalogic: '#7DA57D', buttonA: '#8A2BE2', buttonX: '#FF4500', buttonB: '#FFD700', buttonY: '#32CD32' },
      },
      29: {
        id: 34277,
        level: 30,
        preco: 145,
        colors: { analogic: '#D4A5A5', innerAnalogic: '#A57D7D', buttonA: '#FA8072', buttonX: '#32CD32', buttonB: '#FFD700', buttonY: '#8A2BE2' },
      },
      30: {
        id: 35284,
        level: 31,
        preco: 150,
        colors: { analogic: '#D5A3A3', innerAnalogic: '#8C5252', buttonA: '#A8578A', buttonX: '#32CD32', buttonB: '#FF4500', buttonY: '#FFD700' },
      },
      31: {
        id: 36291,
        level: 32,
        preco: 155,
        colors: { analogic: '#A5D4A5', innerAnalogic: '#7DA57D', buttonA: '#FA8072', buttonX: '#32CD32', buttonB: '#FFD700', buttonY: '#8A2BE2' },
      },
      32: {
        id: 37298,
        level: 33,
        preco: 160,
        colors: { analogic: '#A5D4CC', innerAnalogic: '#7DA5A1', buttonA: '#8A2BE2', buttonX: '#FF4500', buttonB: '#32CD32', buttonY: '#FFD700' },
      },
      33: {
        id: 38305,
        level: 34,
        preco: 165,
        colors: { analogic: '#A5A5D4', innerAnalogic: '#7D7DA5', buttonA: '#7B68EE', buttonX: '#FF6347', buttonB: '#FFD700', buttonY: '#32CD32' },
      },
      34: {
        id: 39312,
        level: 35,
        preco: 170,
        colors: { analogic: '#D4A5A5', innerAnalogic: '#A57D7D', buttonA: '#FA8072', buttonX: '#8A2BE2', buttonB: '#32CD32', buttonY: '#FFD700' },
      },
      35: {
        id: 40319,
        level: 36,
        preco: 175,
        colors: { analogic: '#A5D4A5', innerAnalogic: '#7DA57D', buttonA: '#8A2BE2', buttonX: '#32CD32', buttonB: '#FF4500', buttonY: '#FFD700' },
      },
      36: {
        id: 41326,
        level: 37,
        preco: 180,
        colors: { analogic: '#D5A3A3', innerAnalogic: '#8C5252', buttonA: '#A8578A', buttonX: '#32CD32', buttonB: '#FF4500', buttonY: '#FFD700' },
      },
      37: {
        id: 42333,
        level: 38,
        preco: 185,
        colors: { analogic: '#A5D4CC', innerAnalogic: '#7DA5A1', buttonA: '#8A2BE2', buttonX: '#FF4500', buttonB: '#FFD700', buttonY: '#32CD32' },
      },
      38: {
        id: 43340,
        level: 39,
        preco: 190,
        colors: { analogic: '#A5A5D4', innerAnalogic: '#7D7DA5', buttonA: '#7B68EE', buttonX: '#32CD32', buttonB: '#FFD700', buttonY: '#FF6347' },
      },
      39: {
        id: 44347,
        level: 40,
        preco: 195,
        colors: { analogic: '#D4A5A5', innerAnalogic: '#A57D7D', buttonA: '#FA8072', buttonX: '#8A2BE2', buttonB: '#FFD700', buttonY: '#32CD32' },
      },
      40: {
        id: 45354,
        level: 41,
        preco: 200,
        colors: { analogic: '#A5D4A5', innerAnalogic: '#7DA57D', buttonA: '#8A2BE2', buttonX: '#32CD32', buttonB: '#FF4500', buttonY: '#FFD700' },
      },
      41: {
        id: 46361,
        level: 42,
        preco: 205,
        colors: { analogic: '#D5A3A3', innerAnalogic: '#8C5252', buttonA: '#A8578A', buttonX: '#32CD32', buttonB: '#FF4500', buttonY: '#FFD700' },
      },
      42: {
        id: 47368,
        level: 43,
        preco: 210,
        colors: { analogic: '#A5D4CC', innerAnalogic: '#7DA5A1', buttonA: '#8A2BE2', buttonX: '#FF4500', buttonB: '#32CD32', buttonY: '#FFD700' },
      },
      43: {
        id: 48375,
        level: 44,
        preco: 215,
        colors: { analogic: '#A5A5D4', innerAnalogic: '#7D7DA5', buttonA: '#7B68EE', buttonX: '#32CD32', buttonB: '#FFD700', buttonY: '#FF6347' },
      },
      44: {
        id: 49382,
        level: 45,
        preco: 220,
        colors: { analogic: '#D4A5A5', innerAnalogic: '#A57D7D', buttonA: '#FA8072', buttonX: '#8A2BE2', buttonB: '#FFD700', buttonY: '#32CD32' },
      },
      45: {
        id: 50389,
        level: 46,
        preco: 225,
        colors: { analogic: '#A5D4A5', innerAnalogic: '#7DA57D', buttonA: '#8A2BE2', buttonX: '#32CD32', buttonB: '#FF4500', buttonY: '#FFD700' },
      },
      46: {
        id: 51396,
        level: 47,
        preco: 230,
        colors: { analogic: '#D5A3A3', innerAnalogic: '#8C5252', buttonA: '#A8578A', buttonX: '#32CD32', buttonB: '#FFD700', buttonY: '#FF4500' },
      },
      47: {
        id: 52403,
        level: 48,
        preco: 235,
        colors: { analogic: '#A5D4CC', innerAnalogic: '#7DA5A1', buttonA: '#8A2BE2', buttonX: '#FF4500', buttonB: '#32CD32', buttonY: '#FFD700' },
      },
      48: {
        id: 53410,
        level: 49,
        preco: 240,
        colors: { analogic: '#A5A5D4', innerAnalogic: '#7D7DA5', buttonA: '#7B68EE', buttonX: '#32CD32', buttonB: '#FFD700', buttonY: '#FF6347' },
      },
      49: {
        id: 54417,
        level: 50,
        preco: 245,
        colors: { analogic: '#D4A5A5', innerAnalogic: '#A57D7D', buttonA: '#FA8072', buttonX: '#8A2BE2', buttonB: '#FFD700', buttonY: '#32CD32' },
      }, 50: {
        id: 55424,
        level: 51,
        preco: 250,
        colors: { analogic: '#FF6347', innerAnalogic: '#4682B4', buttonA: '#00FF00', buttonX: '#FFD700', buttonB: '#00FF00', buttonY: '#8A2BE2' },
      },
      51: {
        id: 56431,
        level: 52,
        preco: 255,
        colors: { analogic: '#800080', innerAnalogic: '#DA70D6', buttonA: '#32CD32', buttonX: '#8B0000', buttonB: '#32CD32', buttonY: '#FF4500' },
      },
      52: {
        id: 57438,
        level: 53,
        preco: 260,
        colors: { analogic: '#5F9EA0', innerAnalogic: '#7FFFD4', buttonA: '#FFD700', buttonX: '#FF4500', buttonB: '#FF4500', buttonY: '#32CD32' },
      },
      53: {
        id: 58445,
        level: 54,
        preco: 265,
        colors: { analogic: '#D2691E', innerAnalogic: '#FF7F50', buttonA: '#8A2BE2', buttonX: '#FFD700', buttonB: '#8A2BE2', buttonY: '#32CD32' },
      },
      54: {
        id: 59452,
        level: 55,
        preco: 270,
        colors: { analogic: '#6495ED', innerAnalogic: '#00FFFF', buttonA: '#FF4500', buttonX: '#32CD32', buttonB: '#FF4500', buttonY: '#FFD700' },
      },
      55: {
        id: 60459,
        level: 56,
        preco: 275,
        colors: { analogic: '#DC143C', innerAnalogic: '#FF1493', buttonA: '#00FF00', buttonX: '#8A2BE2', buttonB: '#00FF00', buttonY: '#FFD700' },
      },
      56: {
        id: 61466,
        level: 57,
        preco: 280,
        colors: { analogic: '#00008B', innerAnalogic: '#00BFFF', buttonA: '#FF6347', buttonX: '#FFD700', buttonB: '#FF6347', buttonY: '#32CD32' },
      },
      57: {
        id: 62473,
        level: 58,
        preco: 285,
        colors: { analogic: '#B8860B', innerAnalogic: '#FFD700', buttonA: '#8A2BE2', buttonX: '#FF4500', buttonB: '#8A2BE2', buttonY: '#32CD32' },
      },
      58: {
        id: 63480,
        level: 59,
        preco: 290,
        colors: { analogic: '#006400', innerAnalogic: '#00FF00', buttonA: '#FFD700', buttonX: '#FF6347', buttonB: '#FFD700', buttonY: '#32CD32' },
      },
      59: {
        id: 64487,
        level: 60,
        preco: 295,
        colors: { analogic: '#8B0000', innerAnalogic: '#FF6347', buttonA: '#32CD32', buttonX: '#FFD700', buttonB: '#32CD32', buttonY: '#8A2BE2' },
      }, 70: {
        id: 75564,
        level: 71,
        preco: 350,
        colors: { analogic: '#A9A9A9', innerAnalogic: '#808080', buttonA: '#696969', buttonX: '#A9A9A9', buttonB: '#696969', buttonY: '#808080' },
      },
      71: {
        id: 76571,
        level: 72,
        preco: 355,
        colors: { analogic: '#B0C4DE', innerAnalogic: '#778899', buttonA: '#708090', buttonX: '#D3D3D3', buttonB: '#D3D3D3', buttonY: '#A9A9A9' },
      },
      72: {
        id: 77578,
        level: 73,
        preco: 360,
        colors: { analogic: '#D3D3D3', innerAnalogic: '#C0C0C0', buttonA: '#A9A9A9', buttonX: '#808080', buttonB: '#A9A9A9', buttonY: '#696969' },
      },
      73: {
        id: 78585,
        level: 74,
        preco: 365,
        colors: { analogic: '#C0C0C0', innerAnalogic: '#A9A9A9', buttonA: '#808080', buttonX: '#696969', buttonB: '#696969', buttonY: '#778899' },
      },
      74: {
        id: 79592,
        level: 75,
        preco: 370,
        colors: { analogic: '#808080', innerAnalogic: '#696969', buttonA: '#A9A9A9', buttonX: '#778899', buttonB: '#A9A9A9', buttonY: '#C0C0C0' },
      },
      75: {
        id: 80600,
        level: 76,
        preco: 375,
        colors: { analogic: '#778899', innerAnalogic: '#708090', buttonA: '#D3D3D3', buttonX: '#A9A9A9', buttonB: '#D3D3D3', buttonY: '#808080' },
      },
      76: {
        id: 81608,
        level: 77,
        preco: 380,
        colors: { analogic: '#708090', innerAnalogic: '#778899', buttonA: '#808080', buttonX: '#696969', buttonB: '#808080', buttonY: '#C0C0C0' },
      },
      77: {
        id: 82616,
        level: 78,
        preco: 385,
        colors: { analogic: '#A9A9A9', innerAnalogic: '#D3D3D3', buttonA: '#C0C0C0', buttonX: '#696969', buttonB: '#C0C0C0', buttonY: '#778899' },
      },
      78: {
        id: 83624,
        level: 79,
        preco: 390,
        colors: { analogic: '#696969', innerAnalogic: '#808080', buttonA: '#A9A9A9', buttonX: '#D3D3D3', buttonB: '#A9A9A9', buttonY: '#778899' },
      },
      79: {
        id: 84632,
        level: 80,
        preco: 395,
        colors: { analogic: '#D3D3D3', innerAnalogic: '#A9A9A9', buttonA: '#808080', buttonX: '#696969', buttonB: '#808080', buttonY: '#C0C0C0' },
      },
      80: {
        id: 85640,
        level: 81,
        preco: 400,
        colors: { analogic: '#778899', innerAnalogic: '#708090', buttonA: '#696969', buttonX: '#A9A9A9', buttonB: '#696969', buttonY: '#808080' },
      },
      81: {
        id: 86647,
        level: 82,
        preco: 405,
        colors: { analogic: '#FF073A', innerAnalogic: '#FFDD00', buttonA: '#0FF0FC', buttonX: '#39FF14', buttonB: '#FF073A', buttonY: '#FFDD00' },
      },
      82: {
        id: 87654,
        level: 83,
        preco: 410,
        colors: { analogic: '#0FF0FC', innerAnalogic: '#39FF14', buttonA: '#FFDD00', buttonX: '#FF073A', buttonB: '#0FF0FC', buttonY: '#39FF14' },
      },
      83: {
        id: 88661,
        level: 84,
        preco: 415,
        colors: { analogic: '#FFDD00', innerAnalogic: '#FF073A', buttonA: '#39FF14', buttonX: '#0FF0FC', buttonB: '#FFDD00', buttonY: '#FF073A' },
      },
      84: {
        id: 89668,
        level: 85,
        preco: 420,
        colors: { analogic: '#FF073A', innerAnalogic: '#0FF0FC', buttonA: '#39FF14', buttonX: '#FFDD00', buttonB: '#FF073A', buttonY: '#39FF14' },
      },
    
  }
}

  getColors() {
    return this.Items_colors;
  }
}
