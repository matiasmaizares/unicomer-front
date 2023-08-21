import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CuotaService {
  private URL = 'http://localhost:4000/api';
  private usuarioId: string; // Agrega la propiedad usuarioId

  constructor(private http: HttpClient) {
    this.usuarioId = localStorage.getItem('usuarioId') || '';
  }

  getCuotas() {
    const url = `${this.URL}/cuotas/${this.usuarioId}`;
    return this.http.get(url);
  }

  getCuotasPrincipal() {
    const url = `${this.URL}/cuotas/principal/${this.usuarioId}`;
    return this.http.get(url);
  }
}
