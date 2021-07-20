import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  empleados:any;
  mensaje:string;

  constructor(private es:EmpleadosService) {
    this.empleados = null;
    this.mensaje = "Cargando datos...";
  }

  ngOnInit(): void {
    this.verListadoEmpleados();
  }

  recargarDatos() {
    this.empleados=null;
    this.mensaje = "Cargando datos...";
    this.verListadoEmpleados();
  }

  verListadoEmpleados() {
    this.es.getListadoEmpleados()
    .subscribe(
      empleados=>{
        this.empleados=empleados.data;
      },
      errors=>{
        this.mensaje = "Ha ocurrido un error obteniendo los datos de empleados: [" + errors.status + "]" + errors.statusText;
        console.log(errors);
      }
    );
  }

}
