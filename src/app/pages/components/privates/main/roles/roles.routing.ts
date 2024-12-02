import { Routes } from '@angular/router';
import {SuperAdminComponent} from './super-admin/super-admin.component';

export const rolesRouting: Routes = [

  {
    path: 'admin',
    component: SuperAdminComponent
  },
  {
    path: 'moderador',
    component: SuperAdminComponent
  },
  { path: '**', redirectTo: 'admin',pathMatch: 'full' },
];
