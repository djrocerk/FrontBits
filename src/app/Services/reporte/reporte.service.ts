import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reporte } from 'src/app/Interface/reporte.interface';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  baseUrl = `http://localhost:8080/api`

  constructor(private http: HttpClient) {

   }

   generarReporte(id_cliente: number,fechai: Date, fechaf: Date , ): Observable<Reporte>{
    const url = `${this.baseUrl}/reporte`
    const params = {
      id_cliente: id_cliente,
      fechaInicio: fechai,
      fechaFinal: fechaf,
    }

    return this.http.post<Reporte>(url, params);

   }


}
