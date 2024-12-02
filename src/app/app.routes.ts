import { Routes } from '@angular/router';
import {HomeComponent} from './pages/components/privates/main/home/home.component';

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
  },

  { path: '', redirectTo: 'auth/login',pathMatch: "full" },
  { path: '**', redirectTo: 'auth/login' },

];
