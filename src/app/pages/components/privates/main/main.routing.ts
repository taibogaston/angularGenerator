import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const mainRouting: Routes = [

  // Rutas principales
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
          import('./home/home.routing').then(m => m.homeRouting),
      },
      {
        path: 'roles',
        loadChildren: () =>
          import('./roles/roles.routing').then(m => m.rolesRouting),
      },
      { path: '', redirectTo: 'main/inicio', pathMatch: 'full' },
    ],

  },

  // Redirección para rutas no encontradas fuera de 'main'
  { path: '**', redirectTo: 'main/inicio', pathMatch: 'full' },
];
