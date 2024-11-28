import {Component, OnInit} from '@angular/core';
import {MegaMenuItem} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {AvatarModule} from 'primeng/avatar';
import {BadgeModule} from 'primeng/badge';
import {Ripple} from 'primeng/ripple';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MenuModule,
    AvatarModule,
    BadgeModule,
    Ripple
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  items: MegaMenuItem[] | undefined;
  constructor(private router : Router) {
  }
  ngOnInit(): void {
    this.cargarItemsDelMenu();
  }

  cargarItemsDelMenu() {
    this.items = [
      { label: 'New', icon: 'pi pi-plus' },
      { label: 'Search', icon: 'pi pi-search' },
      {
        label: 'Cerrar sesion', icon: 'pi pi-sign-out',
        command: () => this.router.navigate(['auth/login']),
      }
    ];
  }

}
