import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  idSel:number;
  ipcSel:number;
  empleado:any;
  error:string;
  salario_ipc:number;

  constructor(private es:EmpleadosService) {
    this.idSel = 0;
    this.ipcSel = 0;
    this.error = "";
    this.salario_ipc = 0;
  }

  ngOnInit(): void {
  }

  consultarEmp() {
    this.empleado=null;
    this.error="";

    if(this.ipcSel==null) {
      this.ipcSel=0;
    }
    
    this.es.getEmpleado(this.idSel)
    .subscribe(
      empleado=>{
        this.empleado=empleado.data;
        this.salario_ipc=this.empleado.employee_salary + (this.empleado.employee_salary * this.ipcSel / 100);
      },
      errors=>{
        this.error = "Ha ocurrido un error obteniendo los datos del empleado: [" + errors.status + "]" + errors.statusText;
      }
    );
  }

}
