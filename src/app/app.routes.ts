import { Routes } from '@angular/router';

export const routes: Routes = [

  //RUTAS PUBLICAS.
  {
    path: '',
    loadChildren: ():any  => import('./pages/components/publics/auth/auth.routing').then(m => m.authRouting)
  },


  //RUTAS PRIVADAS
  {
    path: '',
    loadChildren: ():any => import('./pages/components/privates/main/main.routing').then(m => m.mainRouting)
  }
];
