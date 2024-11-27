import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../model/auth.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn: boolean;
  constructor(private authService: AuthService) {

    this.isLoggedIn = this.authService.authenticated;
  }
}
