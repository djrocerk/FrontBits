import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//components
import { HomeComponent } from './Pages/home/home.component';
import { ReporteComponent } from './Components/reporte/reporte.component';
import { ListarClienteComponent } from './Components/cliente/listar-cliente/listar-cliente.component';
import { ActualizarClienteComponent } from './Components/cliente/actualizar-cliente/actualizar-cliente.component';
import { ListarCuentaComponent } from './Components/cuenta/listar-cuenta/listar-cuenta.component';
import { ActualizarCuentaComponent } from './Components/cuenta/actualizar-cuenta/actualizar-cuenta.component';
import { PublicidadComponent } from './Components/publicidad/publicidad.component';
import { HttpClientModule } from "@angular/common/http";
import { MovimientoComponent } from './Components/movimiento/listar-movimiento/movimiento.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

//modulos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActualizarMovimientoComponent } from './Components/movimiento/actualizar-movimiento/actualizar-movimiento.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReporteComponent,
    MovimientoComponent,
    ListarClienteComponent,
    ActualizarClienteComponent,
    ListarCuentaComponent,
    ActualizarCuentaComponent,
    PublicidadComponent,
    NavbarComponent,
    ActualizarMovimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
