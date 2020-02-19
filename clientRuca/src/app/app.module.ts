import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { JugadorListComponent } from './components/jugador-list/jugador-list.component';

// Services
import { JugadoresService } from './services/jugadores.service';
import { JugadorFormComponent } from './components/jugador-form/jugador-form.component';
import { AuthModule } from "../app/auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    JugadorFormComponent,
    JugadorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule
  ],
  providers: [
    JugadoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
