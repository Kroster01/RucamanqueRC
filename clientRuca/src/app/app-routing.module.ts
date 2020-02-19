import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JugadorListComponent } from './components/jugador-list/jugador-list.component';
import { JugadorFormComponent } from './components/jugador-form/jugador-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'jugadores', component: JugadorListComponent },
  { path: 'jugadores/add', component: JugadorFormComponent },
  { path: 'jugadores/edit/:id', component: JugadorFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
