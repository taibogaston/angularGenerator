import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';

@Component({
  selector: 'app-sidebar',
  imports: [
    Button,
    SidebarModule
  ],
  templateUrl: './sidebar.component.html',
  standalone: true,
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  sidebarVisible:boolean = false;
}
