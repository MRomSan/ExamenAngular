import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  empleados:any;
  error:string;

  constructor(private es:EmpleadosService) {
    this.empleados = null;
    this.error = "";
  }

  ngOnInit(): void {
    this.verListadoEmpleados();
  }

  verListadoEmpleados() {
    this.es.getListadoEmpleados()
    .subscribe(
      empleados=>{
        this.empleados=empleados.data;
      },
      errors=>{
        this.error = "Ha ocurrido un error obteniendo los datos de empleados: " + errors;
      }
    );
  }

}
