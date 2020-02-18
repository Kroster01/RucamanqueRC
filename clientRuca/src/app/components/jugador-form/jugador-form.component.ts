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
    id: 0,
    rut: '',
    nombre: '',
    imagen: '',
    create_row_date: new Date()
  };

  edit: boolean = false;

  constructor(private jugadorService: JugadoresService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.jugadorService.getJugador(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.jugador = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewGame() {
    delete this.jugador.create_row_date;
    delete this.jugador.id;
    this.jugadorService.saveJugador(this.jugador)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/jugadores']);
        },
        err => console.error(err)
      )
  }

  updateGame() {
    delete this.jugador.create_row_date;
    this.jugadorService.updateJugador(this.jugador.id, this.jugador)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/jugadores']);
        },
        err => console.error(err)
      )
  }

}
