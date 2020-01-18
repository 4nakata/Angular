import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';

const routes: Routes = [
  { path: 'inicio', 
    component: InicioComponent 
  },
  {
    path: 'empleado',
    component: EmpleadoComponent
  },

  {
      path: '**',
      component : InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
