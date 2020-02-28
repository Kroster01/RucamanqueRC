import { Component, OnInit, HostBinding } from '@angular/core';
import { Jugador } from 'src/app/models/Jugador';

import { JugadoresService } from 'src/app/services/jugadores.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jugador-form',
  templateUrl: './jugador-form.component.html',
  styleUrls: ['./jugador-form.component.css']
})
export class JugadorFormComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  jugador: Jugador = {
    jug_id: 0,
    jug_imagen: ''
  };

  edit: boolean = false;

  constructor(private jugadorService: JugadoresService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.jugadorService.getJugador(params.id)
        .subscribe(
          res => {
            let map = new Map(Object.entries(res));
            this.jugador.jug_id = map.get('JUG_ID');
            this.jugador.jug_nombre = map.get('JUG_NOMBRE');
            this.jugador.jug_telefono = map.get('JUG_TELEFONO');
            this.jugador.jug_email = map.get('JUG_EMAIL');
            this.jugador.jug_rut = map.get('JUG_RUT');
            this.jugador.jug_fecha_nac = map.get('JUG_FECHA_NAC');
            this.jugador.jug_imagen = map.get('JUG_IMAGEN');

            this.jugador.jug_fecha_ingreso = map.get('JUG_FECHA_INGRESO');
            this.jugador.jug_seguro_acc = map.get('JUG_SEGURO_ACC');
            this.jugador.jug_estado_en_club = map.get('JUG_ESTADO_EN_CLUB');
            this.jugador.jug_medicamentos = map.get('JUG_MEDICAMENTOS');
            this.jugador.jug_evaluacion_nutri = map.get('JUG_EVALUACION_NUTRI');
            this.jugador.jug_alergias = map.get('JUG_ALERGIAS');
            this.jugador.jug_observaciones = map.get('JUG_OBSERVACIONES');
            this.jugador.jug_grupo_sanguineo = map.get('JUG_GRUPO_SANGUINEO');
            this.jugador.jug_puesto_cancha = map.get('JUG_PUESTO_CANCHA');
            this.jugador.jug_categoria = map.get('JUG_CATEGORIA');
            this.jugador.jug_prevision = map.get('JUG_PREVISION');

            this.jugador.jug_estatura = map.get('JUG_ESTATURA');
            this.jugador.jug_peso = map.get('JUG_PESO');
            this.jugador.jug_fecha_esta_peso = map.get('JUG_FECHA_ESTA_PESO');

            this.jugador.jug_usu_crea = map.get('JUG_USU_CREA');
            this.jugador.jug_usu_fecha_crea = map.get('JUG_USU_CREA_FECHA');
            this.jugador.jug_usu_mod = map.get('JUG_USU_MOD');
            this.jugador.jug_usu_fecha_mod = map.get('JUG_USU_MOD_FECHA');
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewJugador() {
    delete this.jugador.jug_usu_crea;
    delete this.jugador.jug_id;
    this.jugador.jug_estado_en_club = true;
    this.jugadorService.saveJugador(this.jugador)
      .subscribe(
        res => {
          this.router.navigate(['/jugadores']);
        },
        err => console.error(err)
      )
  }

  updateJugador() {
    delete this.jugador.jug_usu_crea;
    delete this.jugador.jug_usu_fecha_crea;
    delete this.jugador.jug_usu_mod;
    delete this.jugador.jug_usu_fecha_mod;
    this.jugadorService.updateJugador(this.jugador.jug_id, this.jugador)
      .subscribe(
        res => { 
          this.router.navigate(['/jugadores']);
        },
        err => console.error(err)
      )
  }

}
