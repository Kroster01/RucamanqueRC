import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jugador } from '../models/Jugador';
import { Observable } from 'rxjs';
import { JugResponseI } from '../models/jug-response';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  _contextPath: string = environment.serverPath;

  constructor(private http: HttpClient) { }

  getJugadores(): Observable<JugResponseI> {
    return this.http.get<JugResponseI>(`${this._contextPath}/jugador`).pipe(tap(
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
    return this.http.get<JugResponseI>(`${this._contextPath}/jugador/${id}`).pipe(tap(
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
    return this.http.delete(`${this._contextPath}/jugador/${id}`);
  }

  saveJugador(jugador: Jugador) {
    return this.http.post(`${this._contextPath}/jugador`, jugador);
  }

  updateJugador(id: string|number, updatedJugador: Jugador): Observable<Jugador> {
    return this.http.put(`${this._contextPath}/jugador/${id}`, updatedJugador);
  }

}
