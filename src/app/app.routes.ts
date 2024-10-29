import { authGuard } from './modules/global/auth/auth.guard';
import { AuthService } from './modules/global/services/auth/auth.service';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./modules/global/pages/singin/singin.component').then(m => m.SinginComponent),
    canActivate: [authGuard]

  },
  {
    path: 'home',
    loadComponent: () => import('./modules/pages/home/home.component').then(m => m.HomeComponent),
    canActivate: [authGuard]

  },
  {
    path: 'register',
    loadComponent: () => import('./modules/global/pages/register/register.component').then(m => m.RegisterComponent),
    canActivate: [authGuard]

  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
