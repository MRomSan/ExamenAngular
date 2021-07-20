import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MadridComponent } from './ciudades/madrid/madrid.component';
import { ToledoComponent } from './ciudades/toledo/toledo.component';
import { ConsultaComponent } from './empleados/consulta/consulta.component';
import { ListadoComponent } from './empleados/listado/listado.component';

const routes: Routes = [
  {
    path: 'empleados/listadoEmpleados',
    component: ListadoComponent
  },
  {
    path: 'empleados/consultarEmpleado',
    component: ConsultaComponent
  },
  {
    path: 'ciudades/madrid',
    component: MadridComponent
  },
  {
    path: 'ciudades/toledo',
    component: ToledoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
