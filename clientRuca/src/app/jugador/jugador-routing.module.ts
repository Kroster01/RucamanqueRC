import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JugadorListComponent } from './components/jugador-list/jugador-list.component';
import { JugadorFormComponent } from './components/jugador-form/jugador-form.component';

const routes: Routes = [
  { path: '', component: JugadorListComponent },
  { path: 'jugadores/add', component: JugadorFormComponent },
  { path: 'jugadores/edit/:id', component: JugadorFormComponent },
  { path: 'jugadores', component: JugadorListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JugadorRoutingModule { }
