
import { User } from './../../interfaces/user.interface';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  [x: string]: any;
  constructor(private _UsersService: UsersService, private router: Router) { }
  userRgisterData!: User;
  Id: number = this._UsersService.users_data.length + 1;

  registerForm: FormGroup = new FormGroup({
    user_name: new FormControl(null, [Validators.minLength(6), Validators.required]),
    age: new FormControl(null, [Validators.min(14), Validators.max(80), Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.pattern("[A-Z a-z]*"), Validators.minLength(8), Validators.required]),
    confirm_password: new FormControl(null, [Validators.pattern("[A-Z a-z]*"), Validators.minLength(8), Validators.required]),
  })

  confirmation_Error: boolean = false;
  submitRegisterForm(registerForm: FormGroup) {
    if (this.registerForm.get('password')?.value !== this.registerForm.get('confirm_password')?.value) {
      this.router.navigate(["/register"]);
      this.confirmation_Error = true
      console.log(this.registerForm.get('password')?.value, this.registerForm.get('confirm_password')?.value)

    }
    else {
      this.confirmation_Error = false;
      this.userRgisterData = {
        id: this.Id,
        user_name: this.registerForm.get('user_name')?.value,
        password: this.registerForm.get('password')?.value,
        role: ' ',
        age: this.registerForm.get('age')?.value,
        enrolled: [],
        progress: [],
        email: this.registerForm.get('email')?.value,
        photo: '',
        comments: [],
      };

      this._UsersService.users_data.push(this.userRgisterData)
      const local_data = this._UsersService.users_data
      localStorage.setItem('allusers', JSON.stringify(local_data));
      this.registerForm.reset()
      console.log(this._UsersService.users_data)
      const allUsers = localStorage.getItem("allusers");
      if (allUsers !== null) {
        const usersArray = JSON.parse(allUsers);
        console.log('Stored Users:', usersArray);
        this._UsersService.users_data = usersArray;
      }


      this.router.navigate(["/login"]);

    }
  }
}
