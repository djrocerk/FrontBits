import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/Interface/cliente.interface';
import { Reporte } from 'src/app/Interface/reporte.interface';
import { ClienteSService } from 'src/app/Services/cliente/cliente-s.service';
import { ReporteService } from 'src/app/Services/reporte/reporte.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css'],
})
export class ReporteComponent implements OnInit {
  formulario: FormGroup = this.fb.group({
    fechaInicio: ['', [Validators.required]],
    fechaFinal: ['', [Validators.required]],
    idCliente: ['', [Validators.required]],
  });

  listarcliente: Cliente[] = [];
  reporte: Reporte;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteSService,
    private reporteService: ReporteService
  ) {}

  ngOnInit() {
    this.listarCliente();
  }

  listarCliente() {
    this.clienteService.listarCliente().subscribe((data) => {
      //console.log(data);
      this.listarcliente = data;
    });
  }

  generarReporte() {
    //console.log(this.formulario.value);

    const idcliente: number = parseInt(this.formulario.value.idCliente);
    const fechaInicio = this.formulario.value.fechaInicio;
    const fechaFinal = this.formulario.value.fechaFinal;

    //console.log(idcliente);
    //console.log(fechaInicio);
    //console.log(fechaFinal);
    
    this.reporteService
      .generarReporte(
        idcliente, fechaInicio, fechaFinal
      )
      .subscribe((data) => {
        //console.log(data);

        this.reporte = data;
      });
  }
}
