export default class Juego {
    constructor(r) {
        this.resultado = r
    }
    set resultado(r) {
        this._resultado = r
    }
    get resultado() {
        return this._resultado
    }
}