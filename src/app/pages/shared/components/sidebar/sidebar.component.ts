import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SidebarModule} from 'primeng/sidebar';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SidebarModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() sidebarVisibled: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  handleClose() {
    this.visibleChange.emit(this.sidebarVisibled);
  }
}
