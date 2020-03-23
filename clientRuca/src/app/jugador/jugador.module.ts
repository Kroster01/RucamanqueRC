import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JugadorRoutingModule } from './jugador-routing.module';
import { JugadorListComponent } from './components/jugador-list/jugador-list.component';
import { JugadorFormComponent } from './components/jugador-form/jugador-form.component';
import { NavigationJugadorComponent } from './components/navigation/navigationJugador.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [
    JugadorListComponent,
    JugadorFormComponent,
    NavigationJugadorComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    JugadorRoutingModule,
    HttpClientModule
  ],
  providers: []
})
export class JugadorModule { }
