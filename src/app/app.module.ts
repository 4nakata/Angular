import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagInputModule } from 'ngx-chips';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MiMM } from './material/material.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { InicioComponent } from './components/inicio/inicio.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EmpleadoComponent,
    EmpleadosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MiMM,
    AppRoutingModule,
    NgbModule,
    TagInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
