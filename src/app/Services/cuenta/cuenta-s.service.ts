import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuenta } from 'src/app/Interface/cuenta.interface';

@Injectable({
  providedIn: 'root'
})
export class CuentaSService {

  baseUrl = `http://localhost:8080/api-app`;

  constructor(private http: HttpClient) { }

  listarCuenta(): Observable<Cuenta[]> {
    const url = `${this.baseUrl}/cuenta`;
    return this.http.get<Cuenta[]>(url);
  }

  agregarCuenta(cuenta: Cuenta):Observable<Cuenta>{
    const url = `${this.baseUrl}/cuenta`;
    return this.http.post<Cuenta>(url, cuenta);
  }

  listarUnaCuenta(id: number): Observable<Cuenta>{
    const url = `${this.baseUrl}/cuenta/${id}`;
    return this.http.get<Cuenta>(url);
  }

  actualizarCuenta(cuenta: Cuenta):Observable<Cuenta>{
    const url = `${this.baseUrl}/cuenta`;
    return this.http.put<Cuenta>(url, cuenta);
  }

  eliminarCuenta(id:number){
    const url = `${this.baseUrl}/cuenta/${id}`;
  
    return this.http.delete(url);
  }
}
