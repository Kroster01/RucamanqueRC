import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jugador } from '../models/Jugador';
import { Observable } from 'rxjs';
import { JugResponseI } from '../models/jug-response';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  API_URI: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getJugadores(): Observable<JugResponseI> {
    return this.http.get<JugResponseI>(`${this.API_URI}/jugador`).pipe(tap(
      (res: JugResponseI) => {
        if (res.code == 200) {
          // guardar token
          console.log('Consulta ejecutada corectamente.');
        }else {
          //  error de servidor.
          console.log('Consulta ejecutada con Error.');
        }
      })
    );
  }

  getJugador(id: string): Observable<JugResponseI> {
    return this.http.get<JugResponseI>(`${this.API_URI}/jugador/${id}`).pipe(tap(
      (res: JugResponseI) => {
        if (res.code == 200) {
          // guardar token
          console.log('Consulta ejecutada corectamente.');
        }else {
          //  error de servidor.
          console.log('Consulta ejecutada con Error.');
        }
      })
    );
  }

  deleteJugador(id: string) {
    return this.http.delete(`${this.API_URI}/jugador/${id}`);
  }

  saveJugador(jugador: Jugador) {
    return this.http.post(`${this.API_URI}/jugador`, jugador);
  }

  updateJugador(id: string|number, updatedJugador: Jugador): Observable<Jugador> {
    return this.http.put(`${this.API_URI}/jugador/${id}`, updatedJugador);
  }

}
