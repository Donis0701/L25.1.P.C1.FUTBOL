/*Conociendo los resultados de varios juegos de tu equipo de futbol,donde
1 es ganar y 0 es perder,hacer un programa que indique el porcentaje de juegos 
que ganaste.*/

import Equipo from "./cl_equipo.js";
import Juego from "./cl_juego.js";

let resultado1 = new Juego(1);
let resultado2 = new Juego(1);
let resultado3 = new Juego(0);
let resultado4 = new Juego(1);
let resultado5 = new Juego(0);
let resultado6 = new Juego(1);

let equipo = new Equipo();

equipo.procesarJuego(resultado1);
equipo.procesarJuego(resultado2);
equipo.procesarJuego(resultado3);
equipo.procesarJuego(resultado4);
equipo.procesarJuego(resultado5);
equipo.procesarJuego(resultado6);

let salida = document.getElementById("salida");
salida.innerHTML = `Ganaste el ${equipo.porcentajeGanados()}% de los partidos`;