import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'singin',
    pathMatch: 'full'
  },
  {
    path: 'singin',
    loadComponent: () => import('./modules/global/pages/singin/singin.component').then(m => m.SinginComponent)
  },
  {
    path: '**',
    redirectTo: 'singin'
  }
];
