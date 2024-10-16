import { CartServiceService } from './../../services/cart-service.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';
import { UserAuthService } from '../../services/user-auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isLoggedIn: boolean = false;
  currentUser: User | null = null;
  constructor(private cart_data:CartServiceService,private userAuth:UserAuthService ){}
  logOut(){
    return this.userAuth.logout();
  }
  is_logged(){
    return this.userAuth.isLogged()
  }
  numOfCoursesInCart:number = 0;
  ngOnInit(): void {
    this.numOfCoursesInCart = this.cart_data.numOfCourses();
    this.currentUser = this.userAuth.getUserData();
  }
  numberofItem(){
    return this.numOfCoursesInCart = this.cart_data.numOfCourses();;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.numberofItem();
  }
}
