import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OperacionesService {
  private URL = environment.apiUrl;
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
