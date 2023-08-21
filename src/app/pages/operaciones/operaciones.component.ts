import { Component, OnInit } from '@angular/core';
import { OperacionesService } from 'src/app/service/operaciones.service';
import { TarjetaService } from 'src/app/service/tarjeta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css'],
})
export class OperacionesComponent implements OnInit {
  tarjeta: any = {};
  extraccionMonto: number = 0;
  depositoMonto: number = 0;
  tarjetas: any = [];
  destinatario: string = '';
  transferenciaMonto: number = 0;

  ngOnInit(): void {
    this.getTarjetaPrincipal();
    this.getCbuAlias();
  }
  constructor(
    private tarjetaService: TarjetaService,
    private operacionesService: OperacionesService
  ) {}

  getTarjetaPrincipal() {
    this.tarjetaService.getTarjetaPrincipal().subscribe((data: any) => {
      this.tarjeta = data.tarjetaPrincipal;
    });
  }
  extraerDinero(): void {
    if (this.extraccionMonto <= 0) {
      Swal.fire('Error', 'El monto a extraer debe ser mayor a 0', 'error');
      return;
    }
    this.operacionesService.extraerDinero(this.extraccionMonto).subscribe(
      (response) => {
        this.getTarjetaPrincipal();
        Swal.fire('¡Exito!', 'Se realizo la transferencia', 'success');
      },
      (error) => {
        Swal.fire('¡Error!', error.error.message, 'error');
      }
    );
  }
  depositarDinero() {
    if (this.depositoMonto <= 0) {
      Swal.fire('Error', 'El monto a depositar debe ser mayor a 0', 'error');
      return;
    }
    this.operacionesService
      .depositarDinero(this.depositoMonto)
      .subscribe((data) => {
        if (data.ok) {
          Swal.fire('¡Éxito!', 'Deposito exitoso', 'success');
          this.getTarjetaPrincipal();
          this.depositoMonto = 0;
        } else {
          Swal.fire('Error', 'Ocurrió un error en la transferencia', 'error');
        }
      });
  }
  getCbuAlias() {
    this.tarjetaService.getCbuAlias().subscribe((data) => {
      this.tarjetas = data;
    });
  }

  realizarTransferencia() {
    if (this.transferenciaMonto && this.destinatario) {
      this.tarjetaService
        .transferir(
          this.tarjeta._id,
          this.destinatario,
          this.transferenciaMonto
        )
        .subscribe(
          (response) => {
            this.getTarjetaPrincipal();
            Swal.fire('¡Exito!', 'Se realizo la transferencia', 'success');
          },
          (error) => {
            Swal.fire('¡Error!', 'Ocurrio un error.', 'error');
          }
        );
    } else {
      Swal.fire(
        '¡Error!',
        'Por favor, ingresa el monto y el destinatario.',
        'error'
      );
    }
  }
}
