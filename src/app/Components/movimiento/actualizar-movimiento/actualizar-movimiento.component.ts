import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuenta } from 'src/app/Interface/cuenta.interface';
import { Movimiento } from 'src/app/Interface/movimiento.interface';
import { CuentaSService } from 'src/app/Services/cuenta/cuenta-s.service';
import { MovimientoSService } from 'src/app/Services/movimiento/movimiento-s.service';

@Component({
  selector: 'app-actualizar-movimiento',
  templateUrl: './actualizar-movimiento.component.html',
  styleUrls: ['./actualizar-movimiento.component.css'],
})
export class ActualizarMovimientoComponent implements OnInit  {
  formulario: FormGroup = this.fb.group({
    fecha: ['', [Validators.required]],
    valor: ['', [Validators.required]],
    numero_cuenta: ['', [Validators.required]],
    tipo_cuenta: ['', [Validators.required]],
  });

  listarcuenta: Cuenta[] = [];
  mensajeError: any;


  constructor(
    private fb: FormBuilder,
    private movimientoService: MovimientoSService,
    private cuentaService: CuentaSService,
    private router: Router,
    aRouter: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.listarCuentas();
  }

  agregarMovimiento() {
    //console.log(this.formulario.value);
    
    const numeroCuenta: number = parseInt(this.formulario.value.numero_cuenta);
    const tipoCuenta: number = parseInt(this.formulario.value.tipo_cuenta);

     const movimiento: Movimiento = {
      fecha: this.formulario.value.fecha,
      valor: this.formulario.value.valor,
      cuenta: {
        id: 0,
        numeroCuenta: numeroCuenta
      },
      tipoMovimiento: {
        idTipoMovimiento: tipoCuenta,
      },
    } 

    this.movimientoService.agregarMovimiento(movimiento).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/movimiento']);
      },
      error: (error) => {
        console.log(error.error);
        this.mensajeError = error.error;
      }
    });

  }

  listarCuentas() {
    this.cuentaService.listarCuenta().subscribe((data) => {
      //console.log(data);

      this.listarcuenta = data;
    });
  }
}
