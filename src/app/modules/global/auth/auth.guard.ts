import { inject } from '@angular/core';
import { AuthService } from './../services/auth/auth.service';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  const user = !!authService.isAuthenticated();

  if (user && (state.url === '/login' || state.url === '/register')) {
    router.navigate(['/home']);
    return false;
  } else if (!user && (state.url !== '/login' && state.url !== '/register')) {
    router.navigate(['/login']);
    return false;
  } else {
    return true;
  }


};
