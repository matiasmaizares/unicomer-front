import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name = '';
  menu: any = [];
  ngOnInit(): void {
    this.getUsername();
    this.getMenu();
  }
  constructor(
    private menuService: MenuService,
    private authService: AuthService
  ) {}

  getUsername() {
    this.name = localStorage.getItem('name') || '';
  }
  getMenu() {
    return this.menuService.getMenu().subscribe((data: any) => {
      console.log(data);
      this.menu = data.menus;
    });
  }

  handleClick(item: any): void {
    if (item.title == 'Cerrar sesión') {
      console.log('entro');
      this.authService.logout();
    }
  }

  isMenuActive: boolean = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}
