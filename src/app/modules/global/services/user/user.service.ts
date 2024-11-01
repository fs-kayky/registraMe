import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  async decryptUserInformation() {

    const token: string | null = this.getUserToken();

    if (token === null) {
      this.logOut();
      window.location.reload();
    }

    if (token !== null) {
      const response = await this.getDecrypt(token);



    }
  }


  getDecrypt(token: string) {
    return new Promise((resolve, _) => this.http.get('localhost:3000/decrypt', { headers: { 'authorization': token } }).subscribe({
      next: (data) => {

      }
    }))
  }

  logOut() {
    localStorage.removeItem('REGISTRAME-USER');
  }

  getUserToken() {
    return localStorage.getItem('REGISTRAME-USER');
  }

}
