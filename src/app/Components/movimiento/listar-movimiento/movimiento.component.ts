import { Component, OnInit } from '@angular/core';
import { Movimiento } from 'src/app/Interface/movimiento.interface';
import { MovimientoSService } from 'src/app/Services/movimiento/movimiento-s.service';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css']
})
export class MovimientoComponent implements OnInit  {
  listarmovimiento: Movimiento[] =[];

  constructor(private movimientoService: MovimientoSService){}
  ngOnInit(): void {
    this.listarMovimiento();
  }

  listarMovimiento(){
    this.movimientoService.listarMovimiento().subscribe(data => {
      console.log(data);
      this.listarmovimiento = data;
      
    } );
  }

  eliminarMovimiento(id: number){
    this.movimientoService.eliminarMovimiento(id).subscribe((data) => {
      console.log(data);
      this.listarMovimiento();
    });
  } 
}
