import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Interface/cliente.interface';
import { ClienteSService } from 'src/app/Services/cliente/cliente-s.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit{

  listClientes: Cliente[] = [];

  constructor(private clienteService: ClienteSService){}
  ngOnInit(): void {
    this.listarCliente();
  }

  listarCliente(){
      this.clienteService.listarCliente().subscribe((data) => {
        //console.log(data);
        this.listClientes = data
      })
  }

  eliminarCliente(id: number){
    this.clienteService.eliminarCliente(id).subscribe(data => {
      //console.log(data);
      this.listarCliente();
    })
  }
}
