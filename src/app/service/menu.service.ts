import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private URL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getMenu() {
    return this.http.get(this.URL + '/menu');
  }
}
