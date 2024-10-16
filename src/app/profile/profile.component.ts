import { UserAuthService } from './../../services/user-auth.service';
// src/app/profile/profile.component.ts
import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private userAuth: UserAuthService) { }
  user: User = {
    id: 0,
    user_name: '',
    password: '',
    role: '',
    age: 0,
    enrolled: [],
    progress: [],
    email: '',
    photo: '',
    comments: [],
    lastAccess: '',
    firstAccess: ''
  };
  
  ngOnInit() {
    this.user = this.userAuth.getUserData();
  }
}


