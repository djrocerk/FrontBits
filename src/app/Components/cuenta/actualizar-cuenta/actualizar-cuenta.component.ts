import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Interface/cliente.interface';
import { Cuenta } from 'src/app/Interface/cuenta.interface';
import { CuentaSService } from 'src/app/Services/cuenta/cuenta-s.service';

@Component({
  selector: 'app-actualizar-cuenta',
  templateUrl: './actualizar-cuenta.component.html',
  styleUrls: ['./actualizar-cuenta.component.css'],
})
export class ActualizarCuentaComponent implements OnInit {
  formulario: FormGroup = this.fb.group({
    numero_cuenta: ['', [Validators.required]],
    saldo: ['', [Validators.required]],
    cliente: ['', [Validators.required]],
  });

  id: number;
  listarcliente: Cliente[] = [];

  constructor(
    private fb: FormBuilder,
    private cuentaService: CuentaSService,
    private router: Router,
    aRouter: ActivatedRoute
  ) {
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
    //console.log(this.id);
  }
  ngOnInit(): void {
    if (this.id !== 0) {
      this.listarUnaCuenta(this.id);
    }
  }


  listarUnaCuenta(id: number) {
    this.cuentaService.listarUnaCuenta(id).subscribe((data) => {
      //console.log(data);
      this.formulario.setValue({
        numero_cuenta: data.numeroCuenta,
        saldo: data.saldo,
        cliente: data.cliente.idCliente,
      });
    });
  }


  agregarCuenta() {
    const cuenta: Cuenta = {
      numeroCuenta: this.formulario.value.numero_cuenta,
      saldo: this.formulario.value.saldo,
      cliente: {
        idCliente: this.formulario.value.cliente, 
      },
    };

    const actualizarCuenta: Cuenta = {
      id: this.id,
      numeroCuenta: this.formulario.value.numero_cuenta,
      saldo: this.formulario.value.saldo,
      cliente: {
        idCliente: this.formulario.value.cliente, 
      },
    };

    //console.log(actualizarCuenta);
    

    if (this.id == 0) {
      //TODO: agregar
      this.cuentaService.agregarCuenta(cuenta).subscribe((data) => {
        //console.log(data);
        this.router.navigate(['/cuenta']);
      });
    } else {
      //TODO: editar
       this.cuentaService.actualizarCuenta(actualizarCuenta).subscribe((data) => {
        console.log(data);
        
        this.router.navigate(['/cuenta']);
      }); 
    }
  }
}
