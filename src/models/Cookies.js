import Player from "./Player";

export default class Cookies  {

    constructor(img){
        this._img = img
    }

    get img () {
        return this._img
    }

    set ChangeImg (img) {
        return this._img = img
    }

}