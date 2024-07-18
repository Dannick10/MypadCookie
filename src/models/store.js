export default class Store {
  constructor() {
    this.themes_color = this.colors();
  }

  colors() {
    return (this.themes_color = {
      0: {
        id: 1010,
        level: 1,
        preco: 10,
        colors: { main: "#292C40", screen: "#292C40" },
      },
      1: {
        id: 2020,
        level: 1,
        preco: 12,
        colors: { main: "#8C472E", screen: "#B0C1D9" },
      },
      2: {
        id: 3030,
        level: 3,
        preco: 23,
        colors: { main: "#A6341B", screen: "#0D0D0D" },
      },
      3: {
        id: 4050,
        level: 5,
        preco: 50,
        colors: { main: "#0C0D0C", screen: "#A6A5A1" },
      },
    });
  }

  getColors() {
    return this.Items_colors;
  }
}
