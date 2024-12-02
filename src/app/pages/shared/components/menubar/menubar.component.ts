import {Component, OnInit} from '@angular/core';
import {MegaMenuItem} from 'primeng/api';
import {MegaMenuModule} from 'primeng/megamenu';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {SidebarModule} from 'primeng/sidebar';
import {MenuModule} from 'primeng/menu';
import {AvatarModule} from 'primeng/avatar';
import {BadgeModule} from 'primeng/badge';
import {NgOptimizedImage} from '@angular/common';
import {Ripple} from 'primeng/ripple';


@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [
    MegaMenuModule,
    SidebarComponent,
    SidebarModule,
    MenuModule,
    AvatarModule,
    BadgeModule,
    NgOptimizedImage,
    Ripple,
  ],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent implements OnInit {


  items: MegaMenuItem[] | undefined;
  sidebarVisible: boolean = false;

  ngOnInit(): void {
    this.cargarItemsDelMenu();
  }

  cargarItemsDelMenu() {
    this.items = [
      {
        icon: 'pi pi-bars',
        command: () => this.sidebarVisible = true,
        style: {color: '#007bff', fontWeight: 'bold'},
        styleClass: 'xl:hidden',
      },
    ];
  }

  onSidebarClose(isVisible: boolean) {
    this.sidebarVisible = isVisible;
  }

}

