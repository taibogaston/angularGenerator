import {Component} from '@angular/core';
import {MenubarComponent} from '../../../shared/components/menubar/menubar.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [
    MenubarComponent,
    RouterOutlet
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  standalone: true,
})
export class MainComponent {

}
