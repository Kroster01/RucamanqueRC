import { Component, OnInit, HostBinding } from '@angular/core';
import { JugadoresService } from "../../services/jugadores.service";
//import { Jugador } from 'src/app/models/Jugador';

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
    this.jugadorService.getJugadores()
      .subscribe(
        res => {
          console.log(res);
          this.jugadores = res;
        },
        err => console.error(err)
      );
  }

  deleteJugador(id: string) {
    this.jugadorService.deleteJugador(id)
      .subscribe(
        res => {
          console.log(res);
          this.getJugadores();
        },
        err => console.error(err)
      )
  }

}
