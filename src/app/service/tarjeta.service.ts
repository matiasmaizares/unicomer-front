import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TarjetaService {
  private URL = 'http://localhost:4000/api';
  private usuarioId: string;

  constructor(private http: HttpClient) {
    this.usuarioId = localStorage.getItem('usuarioId') || '';
  }
  getTarjetaPrincipal() {
    const url = `${this.URL}/tarjeta/obtener-tarjeta-principal/${this.usuarioId}`;
    return this.http.get(url);
  }

  getTarjetas() {
    const url = `${this.URL}/tarjeta/obtener-tarjetas/${this.usuarioId}`;
    return this.http.get(url);
  }
  getEgresos() {
    const url = `${this.URL}/tarjeta/egresos?usuarioId=${this.usuarioId}`;
    return this.http.get(url);
  }
  getIngresos() {
    const url = `${this.URL}/tarjeta/ingresos?usuarioId=${this.usuarioId}`;
    return this.http.get(url);
  }
  cambiarTarjetaPrincipal(tarjetaId: string) {
    const url = `${this.URL}/tarjeta/cambiar-principal/${this.usuarioId}/tarjetaPrincipal/${tarjetaId}`;
    console.log(url);
    return this.http.put(url, {});
  }
  getCbuAlias() {
    const url = `${this.URL}/tarjeta/todas-tarjetas/${this.usuarioId}`;
    return this.http.get(url);
  }
  transferir(tarjetaOrigenId: string, cbuOrAlias: string, monto: number) {
    const requestBody = {
      tarjetaOrigenId,
      cbuOrAlias,
      monto,
    };

    return this.http.post(`${this.URL}/operaciones/transferencia`, requestBody);
  }
}
