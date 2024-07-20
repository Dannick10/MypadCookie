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
        id: 'btn-5055',
        level: 1,
        preco: 0,
        colors: { analogic: '#1A1A1A', innerAnalogic: '#2B2B2B', buttonA: '#4A90E2', buttonB: '#50E3C2', buttonX: '#BD10E0', buttonY: '#F5A623' },
      },
      1: {
        id: 'btn-1010',
        level: 2,
        preco: 3,
        colors: { analogic: '#2A2A2A', innerAnalogic: '#3B3B3B', buttonA: '#7ED321', buttonB: '#D0021B', buttonX: '#F8E71C', buttonY: '#9013FE' },
      },
      2: {
        id: 'btn-2020',
        level: 3,
        preco: 6,
        colors: { analogic: '#3A3A3A', innerAnalogic: '#4B4B4B', buttonA: '#50E3C2', buttonB: '#4A90E2', buttonX: '#BD10E0', buttonY: '#F5A623' },
      },
      3: {
        id: 'btn-3030',
        level: 4,
        preco: 9,
        colors: { analogic: '#4A4A4A', innerAnalogic: '#5B5B5B', buttonA: '#7ED321', buttonB: '#D0021B', buttonX: '#F8E71C', buttonY: '#9013FE' },
      },
      4: {
        id: 'btn-4050',
        level: 5,
        preco: 12,
        colors: { analogic: '#5A5A5A', innerAnalogic: '#6B6B6B', buttonA: '#4A90E2', buttonB: '#50E3C2', buttonX: '#BD10E0', buttonY: '#F5A623' },
      },
      5: {
        id: 'btn-5050',
        level: 6,
        preco: 15,
        colors: { analogic: '#6A6A6A', innerAnalogic: '#7B7B7B', buttonA: '#7ED321', buttonB: '#D0021B', buttonX: '#F8E71C', buttonY: '#9013FE' },
      },
      6: {
        id: 'btn-6060',
        level: 7,
        preco: 18,
        colors: { analogic: '#7A7A7A', innerAnalogic: '#8B8B8B', buttonA: '#50E3C2', buttonB: '#4A90E2', buttonX: '#BD10E0', buttonY: '#F5A623' },
      },
      7: {
        id: 'btn-7070',
        level: 8,
        preco: 21,
        colors: { analogic: '#8A8A8A', innerAnalogic: '#9B9B9B', buttonA: '#7ED321', buttonB: '#D0021B', buttonX: '#F8E71C', buttonY: '#9013FE' },
      },
      8: {
        id: 'btn-8080',
        level: 9,
        preco: 24,
        colors: { analogic: '#9A9A9A', innerAnalogic: '#ABABAB', buttonA: '#4A90E2', buttonB: '#50E3C2', buttonX: '#BD10E0', buttonY: '#F5A623' },
      },
      9: {
        id: 'btn-9090',
        level: 10,
        preco: 27,
        colors: { analogic: '#AAAAAA', innerAnalogic: '#BBBBBB', buttonA: '#7ED321', buttonB: '#D0021B', buttonX: '#F8E71C', buttonY: '#9013FE' },
      },
      10: {
        id: 'btn-1000',
        level: 11,
        preco: 30,
        colors: { analogic: '#BABABA', innerAnalogic: '#CBCBCB', buttonA: '#50E3C2', buttonB: '#4A90E2', buttonX: '#BD10E0', buttonY: '#F5A623' },
      },
      11: {
        id: 'btn-1100',
        level: 12,
        preco: 33,
        colors: { analogic: '#CACACA', innerAnalogic: '#DBDBDB', buttonA: '#7ED321', buttonB: '#D0021B', buttonX: '#F8E71C', buttonY: '#9013FE' },
      },
      12: {
        id: 'btn-1200',
        level: 13,
        preco: 36,
        colors: { analogic: '#DADADA', innerAnalogic: '#EBEBEB', buttonA: '#4A90E2', buttonB: '#50E3C2', buttonX: '#BD10E0', buttonY: '#F5A623' },
      },
      13: {
        id: 'btn-1300',
        level: 14,
        preco: 39,
        colors: { analogic: '#EAEAEA', innerAnalogic: '#FBFBFB', buttonA: '#7ED321', buttonB: '#D0021B', buttonX: '#F8E71C', buttonY: '#9013FE' },
      },
      14: {
        id: 'btn-1400',
        level: 15,
        preco: 42,
        colors: { analogic: '#FAFAFA', innerAnalogic: '#0A0A0A', buttonA: '#50E3C2', buttonB: '#4A90E2', buttonX: '#BD10E0', buttonY: '#F5A623' },
      },
      15: {
        id: 'btn-1500',
        level: 16,
        preco: 45,
        colors: { analogic: '#0B0B0B', innerAnalogic: '#1C1C1C', buttonA: '#7ED321', buttonB: '#D0021B', buttonX: '#F8E71C', buttonY: '#9013FE' },
      },
      16: {
        id: 'btn-1600',
        level: 17,
        preco: 48,
        colors: { analogic: '#1B1B1B', innerAnalogic: '#2C2C2C', buttonA: '#4A90E2', buttonB: '#50E3C2', buttonX: '#BD10E0', buttonY: '#F5A623' },
      },
      17: {
        id: 'btn-1700',
        level: 18,
        preco: 51,
        colors: { analogic: '#2B2B2B', innerAnalogic: '#3C3C3C', buttonA: '#7ED321', buttonB: '#D0021B', buttonX: '#F8E71C', buttonY: '#9013FE' },
      },
      18: {
        id: 'btn-1800',
        level: 19,
        preco: 54,
        colors: { analogic: '#3B3B3B', innerAnalogic: '#4C4C4C', buttonA: '#50E3C2', buttonB: '#4A90E2', buttonX: '#BD10E0', buttonY: '#F5A623' },
      },
      19: {
        id: 'btn-1900',
        level: 20,
        preco: 57,
        colors: { analogic: '#4B4B4B', innerAnalogic: '#5C5C5C', buttonA: '#7ED321', buttonB: '#D0021B', buttonX: '#F8E71C', buttonY: '#9013FE' },
      },
      20: {
        id: 'btn-2000',
        level: 21,
        preco: 60,
        colors: { analogic: '#5B5B5B', innerAnalogic: '#6C6C6C', buttonA: '#4A90E2', buttonB: '#50E3C2', buttonX: '#BD10E0', buttonY: '#F5A623' },
      },
      21: {
        id: 'btn-2100',
        level: 22,
        preco: 63,
        colors: { analogic: '#6B6B6B', innerAnalogic: '#7C7C7C', buttonA: '#7ED321', buttonB: '#D0021B', buttonX: '#F8E71C', buttonY: '#9013FE' },
      }
  }
}

  getColors() {
    return this.Items_colors;
  }
}
