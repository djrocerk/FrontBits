import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ListarClienteComponent } from './Components/cliente/listar-cliente/listar-cliente.component';
import { ListarCuentaComponent } from './Components/cuenta/listar-cuenta/listar-cuenta.component';
import { ReporteComponent } from './Components/reporte/reporte.component';
import { ActualizarClienteComponent } from './Components/cliente/actualizar-cliente/actualizar-cliente.component';
import { ActualizarCuentaComponent } from './Components/cuenta/actualizar-cuenta/actualizar-cuenta.component';
import { MovimientoComponent } from './Components/movimiento/listar-movimiento/movimiento.component';
import { ActualizarMovimientoComponent } from './Components/movimiento/actualizar-movimiento/actualizar-movimiento.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'cliente', component: ListarClienteComponent },
  { path: 'cliente/agregar', component: ActualizarClienteComponent },
  { path: 'cliente/editar/:id', component: ActualizarClienteComponent },
  { path: 'cuenta', component: ListarCuentaComponent },
  { path: 'cuenta/agregar', component: ActualizarCuentaComponent },
  { path: 'cuenta/editar/:id', component: ActualizarCuentaComponent },
  { path: 'movimiento', component: MovimientoComponent },
  { path: 'movimiento/agregar', component: ActualizarMovimientoComponent },
  { path: 'reporte', component: ReporteComponent },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
