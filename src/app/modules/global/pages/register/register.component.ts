import { MessageService } from 'primeng/api';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { RegisterService } from './services/register-service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CardModule, ButtonModule, FloatLabelModule, FormsModule, InputTextModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  router = inject(Router);
  registerService = inject(RegisterService);
  private messageService = inject(MessageService);

  public email!: string;
  public password!: string;
  public confirmPassword!: string;
  public nickname!: string;


  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  async handleRegister() {
    const resolve = await this.registerService.register(this.email, this.password, this.nickname);

    if (resolve) {
      this.router.navigate(['/login']);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usuario registrado com sucesso!' });
    }

  }

}
