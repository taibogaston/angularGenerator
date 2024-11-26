import { Routes } from '@angular/router';
import {HomeComponent} from './home.component';

export const homeRouting: Routes = [
  {
    path: 'inicio',
    component: HomeComponent,
    children: [
        //Cargar hijos de home.
    ]
  }
];
