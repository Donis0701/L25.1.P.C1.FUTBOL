/*Conociendo los resultados de varios juegos de tu equipo de futbol,donde
1 es ganar y 0 es perder,hacer un programa que indique el porcentaje de juegos 
que ganaste.*/

import cl_mEquipo from "./cl_mEquipo.js";
import cl_vEquipo from "./cl_vEquipo.js";
import cl_controlador from "./controlador.js";

export default class cl_principal {
    constructor(){
        let modelo = new cl_mEquipo();
        let vista = new cl_vEquipo();
        let controlador = new cl_controlador(modelo,vista);
        vista.controlador = controlador;
    }
}

