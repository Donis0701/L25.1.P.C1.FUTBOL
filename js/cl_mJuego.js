export default class cl_mJuego {
    constructor({resultado}) {
        this.resultado = resultado;
    }
    set resultado(resultado) {
        this._resultado = +resultado;
        if (this._resultado != 0 && this._resultado != 1) {
            this._resultado = 0;
        }
    }
    get resultado() {
        return this._resultado;
    }
}