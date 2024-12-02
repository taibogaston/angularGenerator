import {Component} from '@angular/core';
import {MenubarComponent} from '../../../shared/components/menubar/menubar.component';
import {RouterOutlet} from '@angular/router';
import {MenuComponent} from '../../../shared/components/menu/menu.component';

@Component({
  selector: 'app-main',
  imports: [
    MenubarComponent,
    RouterOutlet,
    MenuComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  standalone: true,
})
export class MainComponent {

}
