import cl_vJuego from "./cl_vJuego.js";
import cl_mJuego from "./cl_mJuego.js";

export default class cl_vEquipo {
    constructor() {
        this.controlador = null;
        this.lblpartido = document.getElementById("mainForm_lblpartido");
        this.lblporcentajeGanados = document.getElementById("mainForm_lblporcentajeGanados");
        this.vJuego = new cl_vJuego();
        this.vJuego.btProcesar.onclick = () => this.controlador.procesarJuego();
    }
    procesarJuego() {
        this.mJuego = new cl_mJuego({
            resultado: this.vJuego.resultado
        })
        return this.mJuego;
    }
    reporteJuego(porcentajeGanados, partido) {
        this.lblporcentajeGanados.innerHTML = porcentajeGanados;
        this.lblpartido.innerHTML = partido;
    }
}