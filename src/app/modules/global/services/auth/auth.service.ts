import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated() {
    const user = localStorage.getItem('REGISTRAME-USER');

    if (user) {
      return true;
    }

    return false;

  };

}
