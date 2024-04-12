import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Interface/cliente.interface';
import { ClienteSService } from 'src/app/Services/cliente/cliente-s.service';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css'],
})
export class ActualizarClienteComponent implements OnInit {
  formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
  });

  id: number;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteSService,
    private router: Router,
    aRouter: ActivatedRoute
  ) {
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
    console.log(this.id);
  }
  ngOnInit(): void {
    if (this.id !== 0) {
      this.listarUnCliente(this.id);
    }
  }

  listarUnCliente(id: number) {
    this.clienteService.listarUnCliente(id).subscribe((data) => {
      console.log(data);

      this.formulario.setValue({
        nombre: data.nombre,
        direccion: data.direccion,
        telefono: data.telefono,
      });
    });
  }

  agregarCliente() {
    const agregarCliente: Cliente = {
      nombre: this.formulario.value.nombre,
      direccion: this.formulario.value.direccion,
      telefono: this.formulario.value.telefono,
    };
    //console.log(agregarCliente);

    const actualizarCliente: Cliente = {
      idCliente: this.id,
      nombre: this.formulario.value.nombre,
      direccion: this.formulario.value.direccion,
      telefono: this.formulario.value.telefono,
    }
    

    if (this.id == 0) {
      //TODO: agregar
      this.clienteService.agregarCliente(agregarCliente).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/cliente']);
      });
    } else {
      //TODO: editar
      this.clienteService
        .actualizarCliente(actualizarCliente)
        .subscribe((data) => {
          console.log(data);
          
          this.router.navigate(['/cliente']);
        });
    }
  }
}
