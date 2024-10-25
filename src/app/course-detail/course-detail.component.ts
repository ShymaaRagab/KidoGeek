import { Course } from './../../interfaces/course.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  course!: Course | undefined;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService , private cartService: CartServiceService,) {}

  ngOnInit(): void {
    const courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.coursesService.getCourseById(courseId);

  }
  addToCart() {
    if (this.course) {
      this.cartService.addToCart(this.course);
    }
  }
  inCart :boolean = false;
  checkCart(){
    const cart_data = this.cartService.getCartsData();
    if (this.course){
      this.inCart =  cart_data.some(course =>
        course.course_id ===this.course?.course_id);
    }
    return this.inCart;
  }

}

