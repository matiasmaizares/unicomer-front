import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-proximante',
  templateUrl: './proximante.component.html',
  styleUrls: ['./proximante.component.css'],
})
export class ProximanteComponent {
  constructor(private location: Location) {}

  volverAtras(): void {
    this.location.back();
  }
}
