import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  total: number=0;

  constructor() {
    this.getCartsData;
  }
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
    return this.getCartsData().length;
  }

  removeFromCart(courseId: number) {
    const confirmation = confirm('Are you sure you want to delete this course?');
    if (confirmation) {
      this.courses_cart = this.courses_cart.filter(course => course.course_id !== courseId);
      localStorage.setItem('myCart', JSON.stringify(this.courses_cart));
    }
  }

  clearCart(){
    this.courses_cart = [];
    localStorage.setItem('myCart', JSON.stringify(this.courses_cart));
  }

  totalPriceInCart(){
    this.total=0;
    this.courses_cart.forEach(c => {
      this.total += c.price;
    });
    return this.total;
  }
}
