import { Component } from '@angular/core';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-super-admin',
  standalone: true,
  imports: [
    CardModule
  ],
  templateUrl: './super-admin.component.html',
  styleUrl: './super-admin.component.scss'
})
export class SuperAdminComponent {

}
