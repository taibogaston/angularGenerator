import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const mainRouting: Routes = [

  // Redirección por defecto
  { path: '', redirectTo: 'main/inicio', pathMatch: 'full' },


   // Rutas principales
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
          import('./home/home.routing').then(m => m.homeRouting)
      }
    ]
  },
  //Fin Rutas principales


  // Redirección para rutas no encontradas
  { path: '**', redirectTo: 'main/inicio', pathMatch: 'full' }
];
