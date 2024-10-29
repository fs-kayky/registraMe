import { MessageService } from 'primeng/api';
import { LoginService } from './services/login.service';
import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from "primeng/floatlabel"
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singin',
  standalone: true,
  imports: [CardModule, ButtonModule, FloatLabelModule, FormsModule, InputTextModule],
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.scss'
})
export class SinginComponent {

  router = inject(Router);
  private LoginService = inject(LoginService);
  private MessageService = inject(MessageService);

  public email!: string;
  public password!: string;


  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  async handleLogin() {
    const data = await this.LoginService.Login(this.email, this.password) as { user: any, resolve: boolean };

    if (data.resolve) {
      this.MessageService.add({severity:'success', summary:'Success', detail:'Login success'});
    } else {
      this.MessageService.add({severity:'error', summary:'Error', detail:'Login failed'});
    }

  }



}
