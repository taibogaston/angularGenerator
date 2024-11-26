import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [
    RouterOutlet
  ],
  templateUrl: './auth.component.html',
  standalone: true,
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
