export default class Equipo{
    constructor(){
        this.cntPartido = 0;
        this.cntadorGanados = 0;
    }
    procesarJuego(juego){
        if (juego.resultado == 1){
            this.cntadorGanados++;
            this.cntPartido++;
        }
        else{
            this.cntPartido++;
        }
    }
    porcentajeGanados(){
        return (this.cntadorGanados / this.cntPartido) * 100;
    }
}