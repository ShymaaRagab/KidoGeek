import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { User } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  constructor(private user: UsersService, private router: Router) { }
  all_user: User[] = this.user.users_data;
  currentUser: User | undefined;

  login(username: string, email: string, password: string): boolean {
    const trimmedUsername = username.trim().toLowerCase();
    const trimmedEmail = email.trim().toLowerCase();
    const user = this.all_user.find(
      u =>
        (u.user_name.toLowerCase() === trimmedUsername ||
          u.email.toLowerCase() === trimmedEmail) &&
        u.password === password
    );
    if (user) {
      this.currentUser = user;
      const today = new Date();
      this.currentUser.lastAccess = today.getDate() + ' / ' +
        today.getMonth() + ' / ' + today.getFullYear();
      localStorage.setItem('user', JSON.stringify(this.currentUser));
      return true;
    }
    return false;
  }

  isLogged(): boolean{
    const user = localStorage.getItem('user');
    if (user) {
      return true;
    }else{
      return false;
    }
  }

  getUserData() {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      return userData;
    }
  }

  logout(): void {
    this.currentUser = undefined;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }


}
