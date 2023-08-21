import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OperacionesService } from 'src/app/service/operaciones.service';

@Component({
  selector: 'app-ultimas-transacciones',
  templateUrl: './ultimas-transacciones.component.html',
  styleUrls: ['./ultimas-transacciones.component.css'],
})
export class UltimasTransaccionesComponent implements OnInit {
  transacciones: any = [];
  constructor(
    private operacionesService: OperacionesService,
    private datePipe: DatePipe
  ) {}
  ngOnInit(): void {
    this.getUltimasOperaciones();
    console.log(localStorage.getItem('name'));
  }

  getUltimasOperaciones() {
    this.operacionesService.getUltimasTransacciones().subscribe((data: any) => {
      console.log(data);
      this.transacciones = data.transacciones;
    });
  }

  formatDate(inputDate: string, format: string) {
    const date = new Date(inputDate);
    return this.datePipe.transform(date, format);
  }
  getLocalStorageName() {
    return localStorage.getItem('name');
  }

  getStatusClass(estado: string): string {
    switch (estado) {
      case 'Completado':
        return 'completado';
      case 'Cancelado':
        return 'cancelado';
      case 'Pendiente':
        return 'pendiente';
      default:
        return '';
    }
  }
}
