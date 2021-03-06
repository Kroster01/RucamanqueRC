import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services
import { JugadoresService } from './services/jugadores.service';
import { AuthModule } from "../app/auth/auth.module";
import { JugadorModule } from "../app/jugador/jugador.module";
import { Page404Component } from './components/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AuthModule,
    JugadorModule
  ],
  providers: [
    JugadoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
