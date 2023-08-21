import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OperacionesService {
  private URL = 'http://localhost:4000/api';
  private usuarioId: string;

  constructor(private http: HttpClient) {
    this.usuarioId = localStorage.getItem('usuarioId') || '';
  }

  getUltimasTransacciones() {
    const url = `${this.URL}/operaciones/transacciones?userId=${this.usuarioId}`;
    return this.http.get(url);
  }
  extraerDinero(monto: number): Observable<any> {
    const url = `${this.URL}/operaciones/extraer`;
    const data = { userId: this.usuarioId, monto };
    return this.http.post(url, data);
  }
  depositarDinero(monto: number): Observable<any> {
    const url = `${this.URL}/operaciones/depositar`;
    const data = { userId: this.usuarioId, monto };
    return this.http.post(url, data);
  }
}
