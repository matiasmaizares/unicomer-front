import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CuotaService {
  private URL = environment.apiUrl;
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
