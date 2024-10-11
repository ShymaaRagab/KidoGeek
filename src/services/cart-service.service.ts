import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }
  courses_cart : Course[] =[];

  getCartsData(){
    const cart = localStorage.getItem('myCart');
    if (cart) {
      const cartData = JSON.parse(cart);
      this.courses_cart=cartData;
    }
    return this.courses_cart;
  }

  addToCart(course:Course){
    this.courses_cart.push(course);
    localStorage.setItem('myCart', JSON.stringify(this.courses_cart));
    alert('course added successfully');
  }

  numOfCourses(){
    return this.courses_cart.length;
  }

  removeFromCart(index: number){
      const confirmation = confirm("Are you sure you want to delete this student?");
      if (confirmation) {
        this.courses_cart.splice(index, 1);
        localStorage.setItem('myCart', JSON.stringify(this.courses_cart));
      }
  }
}
