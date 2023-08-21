import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CuotaService } from 'src/app/service/cuota.service';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.css'],
})
export class TableInfoComponent {
  cuotas: any = [];
  constructor(private cuotaService: CuotaService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.getCuotasPrincipal();
  }

  getCuotasPrincipal() {
    this.cuotaService.getCuotasPrincipal().subscribe((data: any) => {
      this.cuotas = data;
    });
  }

  formatDate(inputDate: string, format: string) {
    const date = new Date(inputDate);
    return this.datePipe.transform(date, format);
  }
}
