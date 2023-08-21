import { Component, OnInit } from '@angular/core';
import { TarjetaService } from 'src/app/service/tarjeta.service';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css'],
})
export class SaldoComponent implements OnInit {
  tarjeta: any = {};
  ingresos: any = {};
  egresos: any = {};
  loading: boolean = true;

  ngOnInit(): void {
    this.obtenerDatos();
  }
  constructor(private tarjetaService: TarjetaService) {}

  obtenerDatos(): void {
    this.loading = true;
    this.getTarjetaPrincipal();
    this.getIngresos();
    this.getEgresos();
  }

  formatearNumeroTarjeta(numeroTarjeta: string): string {
    if (numeroTarjeta) {
      const tarjetaFormateada = '**** **** **** ' + numeroTarjeta.slice(-4);
      return tarjetaFormateada;
    }
    return '';
  }

  getTarjetaPrincipal() {
    this.tarjetaService.getTarjetaPrincipal().subscribe((data: any) => {
      this.tarjeta = data.tarjetaPrincipal;
    });
  }
  getIngresos() {
    this.tarjetaService.getIngresos().subscribe((data: any) => {
      this.ingresos = data;
      this.checkLoadingState();
    });
  }
  getEgresos() {
    this.tarjetaService.getEgresos().subscribe((data: any) => {
      this.egresos = data;
      this.checkLoadingState();
    });
  }

  checkLoadingState(): void {
    if (this.tarjeta && this.ingresos && this.egresos) {
      this.loading = false;
    }
  }
}
