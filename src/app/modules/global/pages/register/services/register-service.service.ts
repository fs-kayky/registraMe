import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  private http = inject(HttpClient);


  async register(email: string, password: string, nickname: string) {

    const user = {
      email,
      password,
      nickname
    }

    return new Promise((resolve, _) => {
      this.http.post('http://localhost:3000/api/auth/register', user).subscribe({
        next: (data: any) => {
          resolve(true)
        },
        error: (error: any) => {
          resolve(false)
        }
      })
    })

  }

}
