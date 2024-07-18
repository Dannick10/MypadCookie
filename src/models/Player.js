import Cookies from "./Cookies";

export default class Player {
  constructor(name, age, level = 1, money = 0, quantityCookie = 1, invetary =[]) {
    this._name = name;
    this._age = age;
    this._level = level;
    this._money = money;
    this._quantityCookie = quantityCookie;
    this._invetary = invetary
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  get money() {
    return this._money;
  }

  get level() {
    return this._level;
  }

  get invetary() {
    return this._invetary;
  }

  get quantityCookie() {
    return this._quantityCookie;
  }

  upgradeLevel() {
    return new Player(this._name, this._age, this._level + 1, this._money, this._quantityCookie, this._invetary);
  }

  oddMoney(val) {
    return new Player(
      this._name,
      this._age,
      this._level,
      this._money + val,
      this._quantityCookie,
      this._invetary
    );
  }

  accMoney(val) {
    return new Player(this._name, this._age, this._level, this._money - val, this._quantityCookie, this._invetary);
  }

  clickCookie = (val) => {
    let updateMoney = this._money;
    let updateLevel = this._level;

    if (this.quantityCookie % 5 == 1) {
      updateMoney = this._money + 0.1;
    }

    if (this.quantityCookie % 25 == 1) {
      updateLevel = this._level + 0.1;
    }

    return new Player(
      this._name,
      this._age,
      updateLevel,
      updateMoney,
      this._quantityCookie + val,
      this._invetary
    );
  };

  invetaryGerenate = (item) => {
    if (this.invetary.some((e) => e.id.includes(item.id))) {
    return
    }
    return new Player(this._name, this._age, this._level, this._money, this._quantityCookie, this._invetary.push(item))
  };
}
