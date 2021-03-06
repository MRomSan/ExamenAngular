import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaComponent } from './empleados/consulta/consulta.component';
import { ListadoComponent } from './empleados/listado/listado.component';
import { ToledoComponent } from './ciudades/toledo/toledo.component';
import { MadridComponent } from './ciudades/madrid/madrid.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    ListadoComponent,
    ToledoComponent,
    MadridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
