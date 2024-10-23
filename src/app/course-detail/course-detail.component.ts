import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../interfaces/course.interface';
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
      alert('You have successfully enrolled in the course!');   
    }}
    
}

