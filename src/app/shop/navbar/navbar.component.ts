import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../model/auth.service';
import { NgClass, NgIf } from '@angular/common';
@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterLink, NgIf, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn: boolean;
  screenWidth = window.innerWidth;

  constructor(private authService: AuthService) {


    this.isLoggedIn = this.authService.authenticated;

    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth;
    });
  }
}
