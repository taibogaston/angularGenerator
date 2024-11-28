import {Component, EventEmitter, Input, model, OnInit, Output} from '@angular/core';
import {SidebarModule} from 'primeng/sidebar';
import {MegaMenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SidebarModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  @Input() sidebarVisibled: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  items: MegaMenuItem[] | undefined;

  constructor(private router : Router) {
  }
  ngOnInit(): void {
    this.cargarItemsDelMenu();
  }

  handleClose() {
    this.visibleChange.emit(this.sidebarVisibled);
  }

  cargarItemsDelMenu() {
    this.items = [
      { label: 'New', icon: 'pi pi-plus' },
      { label: 'Search', icon: 'pi pi-search' },
      {
        label: 'Cerrar sesion', icon: 'pi pi-search',
        command: () => this.router.navigate(['auth/login']),
      }
    ];
  }

  protected readonly model = model;
}
