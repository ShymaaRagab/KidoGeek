import { CartServiceService } from './../../../services/cart-service.service';
import { Course } from '../../../interfaces/course.interface';
import { CoursesService } from './../../../services/courses.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent implements OnInit, OnChanges {
  @Input()
  searchText: string = "";
  courses_data: Course[] = [];
  cours_data_after_search: Course[] = [];
  inCart: boolean[]= [];

  constructor(private Courses: CoursesService, private Cart: CartServiceService ,private router:Router) {
    this.courses_data = Courses.courses_data;
  }

  ngOnInit(): void {
    this.filterCourses();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchText']) {
      this.filterCourses();
    }
  }
  filterCourses() {
    if (this.searchText === '') {
      this.cours_data_after_search = [];
    } else {
      this.cours_data_after_search = this.courses_data.filter(course =>
        course.title.trim().toLowerCase().includes(this.searchText.trim().toLowerCase()) ||
        course.description.trim().toLowerCase().includes(this.searchText.trim().toLowerCase()) ||
        course.author.trim().toLowerCase().includes(this.searchText.trim().toLowerCase()) ||
        course.category.trim().toLowerCase().includes(this.searchText.trim().toLowerCase())||
        course.price <= Number(this.searchText.trim())

      );
    }
  }

  addToCart(index: number) {
    const course = this.cours_data_after_search[index]
    this.Cart.addToCart(course);
  }

  removeFromCart(index:number){
    const COURSE = this.cours_data_after_search[index]
    this.Cart.removeFromCart(COURSE.course_id);
  }

  checkCart( index : number ){
    const cart_data = this.Cart.getCartsData();
    this.inCart = this.cours_data_after_search.map(course =>
      cart_data.some(cartCourse => cartCourse.course_id === course.course_id) // Assuming each course has a unique id
    );
    return this.inCart[index];
  }


  navigateToPath(path:string){
    this.router.navigate([path]);
  }
  viewCourseDetail(courseId: number) {
    this.router.navigate(['/course_detail', courseId]);
  }
}
