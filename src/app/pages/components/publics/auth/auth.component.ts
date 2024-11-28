import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [
    RouterOutlet,
    NgOptimizedImage
  ],
  templateUrl: './auth.component.html',
  standalone: true,
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
