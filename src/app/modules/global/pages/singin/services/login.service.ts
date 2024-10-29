import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from '../../../services/localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private http = inject(HttpClient);
  private LocalStorage = inject(LocalStorageService);

  async Login(email: string, password: string) {

    const user = {
      email,
      password,
    }

    return new Promise((resolve, _) => {
      this.http.post('http://localhost:3000/api/auth/login', user).subscribe({
        next: (data: any) => {
          console.log(data.user)
          this.LocalStorage.setItem('REGISTRAME-USER', JSON.stringify(data.user))
          resolve({
            user: data.user,
            resolve: true
          })
        },
        error: (error: any) => {
          resolve(false)
        }
      })
    })

  }

}
