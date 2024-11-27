import {Component, OnInit} from '@angular/core';
import {MegaMenuItem} from 'primeng/api';
import {MegaMenuModule} from 'primeng/megamenu';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {SidebarModule} from 'primeng/sidebar';


@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [
    MegaMenuModule,
    SidebarComponent,
    SidebarModule,
  ],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent implements OnInit {


  items: MegaMenuItem[] | undefined;
  sidebarVisible: boolean = false;
  isDarkMode:boolean = false;

  ngOnInit(): void {
    this.cargarItemsDelMenu();
  }

  cargarItemsDelMenu() {
    this.items = [
      {
        label: 'Menú',
        icon: 'pi pi-bars',
        command: () => this.sidebarVisible = true,
        style: {color: '#007bff', fontWeight: 'bold'},
      },
      {
        label: `Tu usuario`,
        icon: 'pi pi-user',
        style: { color: '#007bff', fontWeight: 'bold' },
      },
    ];
  }

  onSidebarClose(isVisible: boolean) {
    this.sidebarVisible = isVisible;
  }

}

