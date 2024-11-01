import { Component } from '@angular/core';
import { UserMenuComponent } from "./components/user-menu/user-menu.component";
import { UserFeedComponent } from "./components/user-feed/user-feed.component";
import { SideInfoComponent } from "./components/side-info/side-info.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserMenuComponent, UserFeedComponent, SideInfoComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor() {

  }

}
