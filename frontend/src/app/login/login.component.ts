// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthenticationService, private router: Router) { }

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      // Successful login, navigate to dashboard
      this.router.navigate(['/dashboard']);
    } else {
      // Failed login, display error message
      this.errorMessage = 'Invalid username or password.';
    }
  }
}