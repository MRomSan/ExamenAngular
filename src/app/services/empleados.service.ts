import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private apipath = 'http://dummy.restapiexample.com/api/v1';

  constructor(private http:HttpClient) { }

  getListadoEmpleados() {
    const path = `${this.apipath}/employees`;
    return this.http.get<Empleado>(path);
  }

  getEmpleado(id:number) {
    const path = `${this.apipath}/employee/${id}`;
    return this.http.get<Empleado>(path);
  }

}
