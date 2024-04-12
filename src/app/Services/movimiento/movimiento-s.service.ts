import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movimiento } from 'src/app/Interface/movimiento.interface';

@Injectable({
  providedIn: 'root'
})
export class MovimientoSService {

  baseUrl = `http://localhost:8080/api-app`;
  constructor(private http: HttpClient) { }


  listarMovimiento(): Observable<Movimiento[]> {
    const url = `${this.baseUrl}/movimiento`;
    return this.http.get<Movimiento[]>(url);
  }


  agregarMovimiento(movimiento: Movimiento):Observable<Movimiento>{
    const url = `${this.baseUrl}/movimiento`;
    return this.http.post<Movimiento>(url, movimiento);
  }

  eliminarMovimiento(id: number): Observable<Movimiento> {
    const url = `${this.baseUrl}/movimiento/${id}`;
    return this.http.delete<Movimiento>(url);
  }

}
