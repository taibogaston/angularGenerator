import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import {ReactiveFormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router';
import {ToastModule} from 'primeng/toast';
import {CheckboxModule} from 'primeng/checkbox';

@Component({
  selector: 'app-login',
  imports: [
    Button,
    InputTextModule,
    DividerModule,
    CardModule,
    ReactiveFormsModule,
    ToastModule,
    RouterLink,
    CheckboxModule
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.scss'
})
export class LoginComponent{
  constructor() {}
}
