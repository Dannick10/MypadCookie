import Cookies from "./Cookies";

export default class Player {
  constructor(
    name,
    age,
    level = 1,
    money = 0,
    quantityCookie = 1,
    invetary =  [],
    gamepad = {
      id: 5055,
      level: 1,
      preco: 1,
      colors: { main: "#593C39", screen: "#D9B1A3" },
    }
  ) {
    this._name = name;
    this._age = age;
    this._level = level;
    this._money = money;
    this._quantityCookie = quantityCookie;
    this._invetary = invetary;
    this._gamepad = gamepad;
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
    return new Player(
      this._name,
      this._age,
      this._level + 1,
      this._money,
      this._quantityCookie,
      this._invetary,
      this._gamepad
    );
  }

  oddMoney(val) {
    return new Player(
      this._name,
      this._age,
      this._level,
      this._money + val,
      this._quantityCookie,
      this._invetary,
      this._gamepad
    );
  }


  accMoney(val) {
    return new Player(
      this._name,
      this._age,
      this._level,
      this._money - val,
      this._quantityCookie,
      this._invetary,
      this._gamepad
    );
  }

  clickCookie = (val) => {
    let updateMoney = this._money;
    let updateLevel = this._level;
    let ranger = 80

    if (this.quantityCookie % 5 == 1) {
      updateMoney += Math.round(this._money + this._level) / ranger;
    }

    if (this.quantityCookie %  Math.floor(10 + this._level) == 1) {
      updateLevel = this._level + 0.1;
    }

    return new Player(
      this._name,
      this._age,
      updateLevel,
      updateMoney,
      this._quantityCookie + val,
      this._invetary,
      this._gamepad
    );
  };

  invetaryGerenate = (item) => {
    if (this.invetary.some((e) => e.id.includes(item.id))) {
      return;
    }
    return new Player(
      this._name,
      this._age,
      this._level,
      this._money,
      this._quantityCookie,
      this._invetary.push(item),
      this._gamepad
    );
  };

  ChangeGamepad = (item) => {
    return new Player(
      this._name,
      this._age,
      this._level,
      this._money,
      this._quantityCookie,
      this._invetary,
      (this._gamepad = item)
    );
  };
}
