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
        colors: { analogic: '#D5C6A2', innerAnalogic: '#8C7D56', buttonA: '#B4A182', buttonX: '#B4A182', buttonB: '#C1B094', buttonY: '#D5C6A2' },
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
    
  }
}

  getColors() {
    return this.Items_colors;
  }
}
