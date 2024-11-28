import { Component } from '@angular/core';
import { AuthService } from '../model/auth.service';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../shop/navbar/navbar.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NavbarComponent, RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  currentRoute: string = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void { }

  logout() {
    this.authService.clear();
    this.router.navigateByUrl('/shop');
  }

}
