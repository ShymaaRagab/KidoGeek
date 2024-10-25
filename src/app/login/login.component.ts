import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = '';
  isLoggedIn: boolean = false;
  userInput: string = '';
  password: string = '';

  constructor(private router: Router, private userAuth: UserAuthService) { }

  onLogin(): void {
    const isAuthenticated = this.userAuth.login
    (this.userInput, this.userInput, this.password);
    if (isAuthenticated) {
      this.isLoggedIn = true;
      this.errorMessage = '';
      this.router.navigate(['/home']);
    } else {
      this.isLoggedIn = false;
      this.errorMessage =
      'Invalid username or password. Please try again.';
    }
  }
}

