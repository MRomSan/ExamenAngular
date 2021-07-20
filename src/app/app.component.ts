import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examenAngular';

  constructor(private router:Router) { }

  abrirListadoEmpleados() {
    this.router.navigate(['empleados/listadoEmpleados']);
  }

  abrirConsultaEmpleado() {
    this.router.navigate(['empleados/consultarEmpleado']);
  }

  abrirDatosMadrid() {
    this.router.navigate(['ciudades/madrid']);
  }

  abrirDatosToledo() {
    this.router.navigate(['ciudades/toledo']);
  }
}
