import { Component, OnInit, HostBinding } from '@angular/core';
import { JugadoresService } from "../../../services/jugadores.service";
import { Jugador } from 'src/app/models/Jugador';

@Component({
  selector: 'app-jugador-list',
  templateUrl: './jugador-list.component.html',
  styleUrls: ['./jugador-list.component.css']
})
export class JugadorListComponent implements OnInit {

  constructor(private jugadorService: JugadoresService) { }

  @HostBinding('class') classes = 'row';

  jugadores: any = [];
  modeTable: boolean;

  ngOnInit() {
    this.modeTable = true;
    this.getJugadores();
  }

  getJugadores() {
    this.jugadorService.getJugadores()
      .subscribe(
        (res) => {
          if (res.code == 200) {
            console.log('ok');
            for (let index = 0; index < res.jug.length; index++) {
            let jugador: Jugador = new Jugador();

            jugador.jug_id = res.jug[index].JUG_ID;
            jugador.jug_nombre = res.jug[index].JUG_NOMBRE;
            jugador.jug_telefono = res.jug[index].JUG_TELEFONO;
            jugador.jug_email = res.jug[index].JUG_EMAIL;
            jugador.jug_rut = res.jug[index].JUG_RUT;
            jugador.jug_fecha_nac = res.jug[index].JUG_FECHA_NAC;
            jugador.jug_imagen = res.jug[index].JUG_IMAGEN;

            jugador.jug_fecha_ingreso = res.jug[index].JUG_FECHA_INGRESO;
            jugador.jug_seguro_acc = res.jug[index].JUG_SEGURO_ACC;
            jugador.jug_estado_en_club = res.jug[index].JUG_ESTADO_EN_CLUB;
            jugador.jug_estado_en_club_bool = res.jug[index].JUG_ESTADO_EN_CLUB == 0 ? false : true;
            jugador.jug_medicamentos = res.jug[index].JUG_MEDICAMENTOS;
            jugador.jug_evaluacion_nutri = res.jug[index].JUG_EVALUACION_NUTRI;
            jugador.jug_alergias = res.jug[index].JUG_ALERGIAS;
            jugador.jug_observaciones = res.jug[index].JUG_OBSERVACIONES;
            jugador.jug_grupo_sanguineo = res.jug[index].JUG_GRUPO_SANGUINEO;
            jugador.jug_puesto_cancha = res.jug[index].JUG_PUESTO_CANCHA;
            jugador.jug_categoria = res.jug[index].JUG_CATEGORIA;
            jugador.jug_prevision = res.jug[index].JUG_PREVISION;

            jugador.jug_estatura = res.jug[index].JUG_ESTATURA;
            jugador.jug_peso = res.jug[index].JUG_PESO;
            jugador.jug_fecha_esta_peso = res.jug[index].JUG_FECHA_ESTA_PESO;

            jugador.jug_usu_crea = res.jug[index].JUG_USU_CREA;
            jugador.jug_usu_fecha_crea = res.jug[index].JUG_USU_CREA_FECHA;
            jugador.jug_usu_mod = res.jug[index].JUG_USU_MOD;
            jugador.jug_usu_fecha_mod = res.jug[index].JUG_USU_MOD_FECHA;

            this.jugadores.push(jugador);
            }
          } else {
            console.log('Nok');
          }
        },
        err => {
          console.error(err)
        }
      );
  }

  zfill(number, width) {
    var numberOutput = Math.abs(number); /* Valor absoluto del número */
    var length = number.toString().length; /* Largo del número */ 
    var zero = "0"; /* String de cero */  
    
    if (width <= length) {
        if (number < 0) {
             return ("-" + numberOutput.toString()); 
        } else {
             return numberOutput.toString(); 
        }
    } else {
        if (number < 0) {
            return ("-" + (zero.repeat(width - length)) + numberOutput.toString()); 
        } else {
            return ((zero.repeat(width - length)) + numberOutput.toString()); 
        }
    }
  }

  cambiarModoTabla() {
    this.modeTable = !this.modeTable;
  }

}
