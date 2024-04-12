import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Interface/cliente.interface';

@Injectable({
  providedIn: 'root',
})
export class ClienteSService {
  baseUrl = `http://localhost:8080/api-app`;
  constructor(private http: HttpClient) {}

  listarCliente(): Observable<Cliente[]> {
    const url = `${this.baseUrl}/cliente`;
    return this.http.get<Cliente[]>(url);
  }

  agregarCliente(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/cliente`;
    return this.http.post<Cliente>(url, cliente);
  }

  listarUnCliente(id: number): Observable<Cliente> {
    const url = `${this.baseUrl}/cliente/${id}`;
    return this.http.get<Cliente>(url);
  }

  actualizarCliente(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/cliente`;
    return this.http.put<Cliente>(url, cliente);
  }

  eliminarCliente(id: number) {
    const url = `${this.baseUrl}/cliente/${id}`;
    return this.http.delete(url);
  }
  
}
