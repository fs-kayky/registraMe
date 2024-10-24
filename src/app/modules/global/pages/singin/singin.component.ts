import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from "primeng/floatlabel"
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-singin',
  standalone: true,
  imports: [CardModule, ButtonModule, FloatLabelModule, FormsModule, InputTextModule],
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.scss'
})
export class SinginComponent {

public username: string | undefined;
public password: string | undefined;


}
