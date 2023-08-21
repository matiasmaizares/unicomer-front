import { Component, OnInit } from '@angular/core';
import { TarjetaService } from 'src/app/service/tarjeta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
})
export class TarjetasComponent implements OnInit {
  tarjetaPrincipal: any = {};
  tarjetasSecundarias: any = [];
  name: string = localStorage.getItem('name') || '';
  tarjetaSeleccionada: string = '';

  ngOnInit(): void {
    this.getTarjetas();
  }
  constructor(private tarjetaService: TarjetaService) {}

  getTarjetas() {
    this.tarjetaService.getTarjetas().subscribe((data: any) => {
      this.tarjetaPrincipal = data.tarjetaPrincipal;
      this.tarjetasSecundarias = data.tarjetasSecundarias;
      console.log(data.tarjetasSecundarias);
    });
  }
  formatearNumeroTarjeta(numeroTarjeta: string): string {
    const grupos = [];

    for (let i = 0; i < numeroTarjeta.length; i += 4) {
      grupos.push(numeroTarjeta.substring(i, i + 4));
    }

    return grupos.join(' ');
  }
  cambiarTarjetaPrincipal(): void {
    this.tarjetaService
      .cambiarTarjetaPrincipal(this.tarjetaSeleccionada)
      .subscribe(
        (data: any) => {
          console.log(data);
          // Mostrar mensaje exitoso con SweetAlert2
          Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: data.message,
          });

          // Reiniciar el valor seleccionado en el <select>
          this.tarjetaSeleccionada = '';
          this.getTarjetas();
        },
        (error) => {
          console.error('Error al cambiar tarjeta principal:', error);
        }
      );
  }
}
