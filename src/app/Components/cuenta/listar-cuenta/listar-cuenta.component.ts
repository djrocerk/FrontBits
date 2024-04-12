import { Component } from '@angular/core';
import { Cuenta } from 'src/app/Interface/cuenta.interface';
import { CuentaSService } from 'src/app/Services/cuenta/cuenta-s.service';

@Component({
  selector: 'app-listar-cuenta',
  templateUrl: './listar-cuenta.component.html',
  styleUrls: ['./listar-cuenta.component.css'],
})
export class ListarCuentaComponent {
  listarcuenta: Cuenta[] = [];

  constructor(private cuentaService: CuentaSService) {}

  ngOnInit(): void {
    this.listarCuenta();
  }

  listarCuenta() {
    this.cuentaService.listarCuenta().subscribe((data) => {
      console.log(data);

      this.listarcuenta = data;
    });
  }
  
  eliminarCuenta(id: number) {
    this.cuentaService.eliminarCuenta(id).subscribe((data) => {
      console.log(data);
      this.listarCuenta();
    });  
  }
}
