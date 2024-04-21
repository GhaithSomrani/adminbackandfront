// authentication.service.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated: boolean = false;

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    // Implement your authentication logic here
    // For simplicity, let's just check if the username and password are 'admin'
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('isLoggedIn', 'true');
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    sessionStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);

  }

  isLoggedIn(): boolean {

    return sessionStorage.getItem('isLoggedIn') === 'true';
  }
}
