import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import {ReactiveFormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-login',
  imports: [
    Button,
    InputTextModule,
    DividerModule,
    CardModule,
    ReactiveFormsModule,
    ToastModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.scss'
})
export class LoginComponent{
  constructor() {}
}
