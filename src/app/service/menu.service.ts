import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private URL = 'http://localhost:4000/api';
  constructor(private http: HttpClient) {}

  getMenu() {
    return this.http.get(this.URL + '/menu');
  }
}
