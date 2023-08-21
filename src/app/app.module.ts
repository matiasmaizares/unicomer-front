import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SaldoComponent } from './components/saldo/saldo.component';
import { BalanceComponent } from './components/balance/balance.component';
import { UltimasTransaccionesComponent } from './components/ultimas-transacciones/ultimas-transacciones.component';
import { TableInfoComponent } from './components/table-info/table-info.component';
import { NgChartsModule } from 'ng2-charts';
import { DatePipe } from '@angular/common';
import { TarjetasComponent } from './pages/tarjetas/tarjetas.component';
import { OperacionesComponent } from './pages/operaciones/operaciones.component';
import { ProximanteComponent } from './pages/proximante/proximante.component';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagefoundComponent,
    HomeComponent,
    DashboardComponent,
    SaldoComponent,
    BalanceComponent,
    UltimasTransaccionesComponent,
    TableInfoComponent,
    TarjetasComponent,
    OperacionesComponent,
    ProximanteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
    ReactiveFormsModule,
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
