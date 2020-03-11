import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { error } from '@angular/compiler/src/util';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  _contextPath: string = environment.serverPath;

  authSubject = new BehaviorSubject(false);
  private token: string;
  constructor(private httpClient: HttpClient) { }
  
  register(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this._contextPath}/register`, user).pipe(tap(
      (res: JwtResponseI) => {
        if (res.code == 200) {
          // guardar token
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }else {
          //  error de servidor.
        }
      })
    );
  }

  login(user: UserI): Observable<any> {
    return this.httpClient.post<any>(`${this._contextPath}/login/`, user).pipe(tap(
      (res: any) => {
        if (res.code == 200) {
          // guardar token
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        } else if (res.code == 401) {
          //  error autenticado
        } else {
          //  error de servidor.
        }
      }, error => {
        console.log('soy un errorrrrrrr');
      })
    );
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

}
