import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../model/auth.service';
import { NavbarComponent } from "../../shop/navbar/navbar.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, NgIf, NavbarComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  public username: string = '';
  public password: string = '';
  public errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {

  }
  login(form: NgForm) {
    if (form.valid) {
      this.authService.authenticate(this.username, this.password)
        .subscribe(response => {
          if (response) {
            this.router.navigateByUrl('/admin/main');
          }
          this.errorMessage = 'Hatalı kullanıcı adı veya parola.'
        })
    }
    else
      this.errorMessage = 'Bilgileri eksiksiz girin.';
  }
}
