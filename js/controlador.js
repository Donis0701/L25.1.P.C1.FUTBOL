export default class cl_controlador{
    constructor(modelo,vista){
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarJuego() {
        this.modelo.procesarJuego(this.vista.procesarJuego());
        this.vista.reporteJuego(this.modelo.porcentajeGanados(),this.modelo.cntPartido);
    }
}