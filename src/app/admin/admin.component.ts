import { Component } from '@angular/core';
import { AuthService } from '../model/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private authService: AuthService, private router: Router) {

  }

  logout() {
    this.authService.clear();
    this.router.navigateByUrl('/shop');
  }
}
