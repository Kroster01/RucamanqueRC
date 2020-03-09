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
  msError: boolean = false;
  msErrorDesc: string = '';
  listaPrevision: string[] = [];
  listaGrupSang: string[] = [];
  listaPostCancha: string[] = [];
  listaCategoria: string[] = [];

  constructor(private jugadorService: JugadoresService, private router: Router, private activatedRoute: ActivatedRoute) {

    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.edit = true;
    }
    this.listaPrevision.push("FONASA");
    this.listaPrevision.push("ISAPRE");
    this.listaPrevision.push("DIPRECA");

    //
    this.listaGrupSang.push("O-");
    this.listaGrupSang.push("O+");
    this.listaGrupSang.push("A−");
    this.listaGrupSang.push("A+");
    this.listaGrupSang.push("B−");
    this.listaGrupSang.push("B+");
    this.listaGrupSang.push("AB−");
    this.listaGrupSang.push("AB+");

    //
    this.listaPostCancha.push("En Observación");
    this.listaPostCancha.push("Pilar Izquierdo");
    this.listaPostCancha.push("Hooker");
    this.listaPostCancha.push("Pilar Derecho");
    this.listaPostCancha.push("Segunda Linea Izquierdo");
    this.listaPostCancha.push("Segunda Linea Derecho");
    this.listaPostCancha.push("Alla Izquierdo");
    this.listaPostCancha.push("Alla Derecho");
    this.listaPostCancha.push("Octavo");
    this.listaPostCancha.push("Medio Scrum");
    this.listaPostCancha.push("Apertura");
    this.listaPostCancha.push("Wing Izquierdo");
    this.listaPostCancha.push("Primer Centro");
    this.listaPostCancha.push("Segundo Centro");
    this.listaPostCancha.push("Wing Derecho");
    this.listaPostCancha.push("Fullback");

    //
    this.listaCategoria.push("En Observación");
    this.listaCategoria.push("M6");
    this.listaCategoria.push("M8");
    this.listaCategoria.push("M10");
    this.listaCategoria.push("M12");
    this.listaCategoria.push("M14");
    this.listaCategoria.push("M16");
    this.listaCategoria.push("M18");
    this.listaCategoria.push("FEMENINA");
    this.listaCategoria.push("PLANTEL SUPERIOR");
    this.listaCategoria.push("CHACHAS");

  }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.jugadorService.getJugador(params.id)
        .subscribe(
          (res) => {
            if (res.code == 200) {
              console.log('ok');
              this.jugador.jug_id = res.jug.JUG_ID;
              this.jugador.jug_nombre = res.jug.JUG_NOMBRE;
              this.jugador.jug_telefono = res.jug.JUG_TELEFONO;
              this.jugador.jug_email = res.jug.JUG_EMAIL;
              this.jugador.jug_rut = res.jug.JUG_RUT;
              this.jugador.jug_fecha_nac = res.jug.JUG_FECHA_NAC;
              this.jugador.jug_imagen = res.jug.JUG_IMAGEN;

              this.jugador.jug_fecha_ingreso = res.jug.JUG_FECHA_INGRESO;
              this.jugador.jug_seguro_acc = res.jug.JUG_SEGURO_ACC;
              this.jugador.jug_estado_en_club = res.jug.JUG_ESTADO_EN_CLUB;
              this.jugador.jug_estado_en_club_bool = res.jug.JUG_ESTADO_EN_CLUB == 0 ? false : true;
              this.jugador.jug_medicamentos = res.jug.JUG_MEDICAMENTOS;
              this.jugador.jug_evaluacion_nutri = res.jug.JUG_EVALUACION_NUTRI;
              this.jugador.jug_alergias = res.jug.JUG_ALERGIAS;
              this.jugador.jug_observaciones = res.jug.JUG_OBSERVACIONES;
              this.jugador.jug_grupo_sanguineo = res.jug.JUG_GRUPO_SANGUINEO;
              this.jugador.jug_puesto_cancha = res.jug.JUG_PUESTO_CANCHA;
              this.jugador.jug_categoria = res.jug.JUG_CATEGORIA;
              this.jugador.jug_prevision = res.jug.JUG_PREVISION;

              this.jugador.jug_estatura = res.jug.JUG_ESTATURA;
              this.jugador.jug_peso = res.jug.JUG_PESO;
              this.jugador.jug_fecha_esta_peso = res.jug.JUG_FECHA_ESTA_PESO;

              this.jugador.jug_usu_crea = res.jug.JUG_USU_CREA;
              this.jugador.jug_usu_fecha_crea = res.jug.JUG_USU_CREA_FECHA;
              this.jugador.jug_usu_mod = res.jug.JUG_USU_MOD;
              this.jugador.jug_usu_fecha_mod = res.jug.JUG_USU_MOD_FECHA;
              this.edit = true;
            } else {
              console.log('Nok');
            }
          },
          err => console.log(err)
        )
    }
  }

  saveNewJugador() {
    delete this.jugador.jug_usu_crea;
    delete this.jugador.jug_id;
    this.jugador.jug_estado_en_club = 1;
    this.jugadorService.saveJugador(this.jugador)
      .subscribe(
        res => {
          this.msError = true;
          this.msErrorDesc = 'Registro Creado Exitosamente.';
        },
        err => console.error(err)
      )
  }

  updateJugador() {
    this.jugador.jug_estado_en_club = this.jugador.jug_estado_en_club_bool ? 1 : 0;
    delete this.jugador.jug_usu_crea;
    delete this.jugador.jug_usu_fecha_crea;
    delete this.jugador.jug_usu_mod;
    delete this.jugador.jug_usu_fecha_mod;
    delete this.jugador.jug_estado_en_club_bool;
    this.jugadorService.updateJugador(this.jugador.jug_id, this.jugador)
      .subscribe(
        res => {
          this.msError = true;
          this.msErrorDesc = 'Datos Actualizados Exitosamente.';
        },
        err => console.error(err)
      )
  }

  redirectJugList() {
    this.router.navigate(['/jugadores']);
  }

  compararNombres(prevision1: string, prevision2: string) {
    if (prevision1 == null || prevision2 == null) {
      return false;
    }
    return prevision1 === prevision2;
  }

}
