
import { Course } from './../../../interfaces/course.interface';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { CoursesService } from '../../../services/courses.service';
import { CartServiceService } from '../../../services/cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maincourses',
  templateUrl: './maincourses.component.html',
  styleUrl: './maincourses.component.css'
})
export class MaincoursesComponent{
  constructor(public coursesservices:CoursesService, private Cart: CartServiceService ,private router:Router){}
  courses: Course[] = [];
  courses_cat:Course[]=[];
  term:string="";
  inCart: boolean[]= [];
  getCoursesByCategory(category: string): void {
    this.coursesservices.filterCoursesByCategory(category);
    this.courses = this.coursesservices.filteredCourses;
  }
  addToCart(index: number) {
    const course = this.coursesservices.filteredCourses[index]
    this.Cart.addToCart(course);
  }

  removeFromCart(index:number){
    const COURSE = this.coursesservices.filteredCourses[index];
    this.Cart.removeFromCart(COURSE.course_id);
  }

  checkCart( index : number ){
    const cart_data = this.Cart.getCartsData();
    this.inCart = this.coursesservices.filteredCourses.map(course =>
      cart_data.some(cartCourse => cartCourse.course_id === course.course_id) 
    );
    return this.inCart[index];
  }

  viewCourseDetail(courseId: number) {
    this.router.navigate(['/course', courseId]); 
  }

}


