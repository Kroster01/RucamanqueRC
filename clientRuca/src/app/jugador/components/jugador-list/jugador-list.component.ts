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

  ngOnInit() {
    this.getJugadores();
  }

  getJugadores() {
    this.jugadorService.getJugadores().subscribe(
        (res: Response) => {
          for (let [key, value] of Object.entries(res)) {

            let map = new Map(Object.entries(value));
            let jugador: Jugador = new Jugador();

            jugador.jug_id = map.get('JUG_ID');
            jugador.jug_nombre = map.get('JUG_NOMBRE');
            jugador.jug_telefono = map.get('JUG_TELEFONO');
            jugador.jug_email = map.get('JUG_EMAIL');
            jugador.jug_rut = map.get('JUG_RUT');
            jugador.jug_fecha_nac = map.get('JUG_FECHA_NAC');
            jugador.jug_imagen = map.get('JUG_IMAGEN');

            jugador.jug_fecha_ingreso = map.get('JUG_FECHA_INGRESO');
            jugador.jug_seguro_acc = map.get('JUG_SEGURO_ACC');
            jugador.jug_estado_en_club = map.get('JUG_ESTADO_EN_CLUB');
            jugador.jug_medicamentos = map.get('JUG_MEDICAMENTOS');
            jugador.jug_evaluacion_nutri = map.get('JUG_EVALUACION_NUTRI');
            jugador.jug_alergias = map.get('JUG_ALERGIAS');
            jugador.jug_observaciones = map.get('JUG_OBSERVACIONES');
            jugador.jug_grupo_sanguineo = map.get('JUG_GRUPO_SANGUINEO');
            jugador.jug_puesto_cancha = map.get('JUG_PUESTO_CANCHA');
            jugador.jug_categoria = map.get('JUG_CATEGORIA');
            jugador.jug_prevision = map.get('JUG_PREVISION');

            jugador.jug_estatura = map.get('JUG_ESTATURA');
            jugador.jug_peso = map.get('JUG_PESO');
            jugador.jug_fecha_esta_peso = map.get('JUG_FECHA_ESTA_PESO');

            jugador.jug_usu_crea = map.get('JUG_USU_CREA');
            jugador.jug_usu_fecha_crea = map.get('JUG_USU_CREA_FECHA');
            jugador.jug_usu_mod = map.get('JUG_USU_MOD');
            jugador.jug_usu_fecha_mod = map.get('JUG_USU_MOD_FECHA');

            this.jugadores.push(jugador);
          }
        },
        err => {
          console.error(err)
        }
      );
  }

  deleteJugador(id: string) {
    this.jugadorService.deleteJugador(id)
      .subscribe(
        res => {
          console.log(res);
          this.getJugadores();
        },
        err => {
          console.error(err)
        }
      )
  }

}
