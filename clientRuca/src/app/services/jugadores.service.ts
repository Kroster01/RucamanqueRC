import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jugador } from '../models/Jugador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getJugadores() {
    return this.http.get(`${this.API_URI}/jugador`);
  }

  getJugador(id: string) {
    return this.http.get(`${this.API_URI}/jugador/${id}`);
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
