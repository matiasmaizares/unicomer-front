import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OperacionesComponent } from './pages/operaciones/operaciones.component';
import { TarjetasComponent } from './pages/tarjetas/tarjetas.component';
import { ProximanteComponent } from './pages/proximante/proximante.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'operaciones',
        component: OperacionesComponent,
      },
      {
        path: 'tarjetas',
        component: TarjetasComponent,
      },
    ],
  },
  { path: 'puntos', component: ProximanteComponent },
  { path: 'ayuda', component: ProximanteComponent },
  { path: 'seguros', component: ProximanteComponent },
  { path: 'prestamos', component: ProximanteComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
