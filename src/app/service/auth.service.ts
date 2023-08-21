import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL = 'http://localhost:4000/api';
  private token: string | null = localStorage.getItem('token');

  constructor(private http: HttpClient, private router: Router) {}
  register(user: any) {
    return this.http.post<any>(this.URL + '/auth/register', user);
  }

  loggin(user: any) {
    return this.http.post<any>(this.URL + '/auth/login', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('usuarioId');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  isAuthenticated(): boolean {
    // Verifica si el token existe y no está vacío
    return !!this.token;
  }
}
