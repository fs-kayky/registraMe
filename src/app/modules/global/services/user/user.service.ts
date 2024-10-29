import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  logOut() {
    localStorage.removeItem('REGISTRAME-USER');
  }

  getUserInfo() {
    return localStorage.getItem('REGISTRAME-USER');
  }

}
