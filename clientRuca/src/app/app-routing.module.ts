import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JugadorFormComponent } from './jugador/components/jugador-form/jugador-form.component';
import { JugadorListComponent } from './jugador/components/jugador-list/jugador-list.component';
import { Page404Component } from "./components/page404/page404.component";

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  {
    path: 'jugadores',
    children: [
      { path: '', component: JugadorListComponent },
      { path: 'add', component: JugadorFormComponent },
      { path: 'edit/:id', component: JugadorFormComponent },
      { path: '**', component: Page404Component }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
