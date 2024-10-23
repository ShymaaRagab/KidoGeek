import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogComponent } from './blog/blog.component';
import { CourseComponent } from './course/course.component';
import { CommunityComponent } from './community/community.component';
import { MaincoursesComponent } from './course/maincourses/maincourses.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { CoursecatigoryComponent } from './course/coursecatigory/coursecatigory.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { authGuard } from './auth.guard';




const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'courses', component: CourseComponent, title: 'courses' },
  { path: 'blog', component: BlogComponent, title: 'blog' },
  { path: 'coursecatigory', component: CoursecatigoryComponent, title: 'coursecatigory' },
  { path: 'maincourses', component: MaincoursesComponent, title: 'maincourses' },
  {path: 'login' , component: LoginComponent},
  { path: 'register', component: RegisterComponent, title: 'register' },
  { path: 'community', component: CommunityComponent, title: 'community' },
  { path: 'search', component: SearchComponent, title: 'search' },
  { path: 'Cart', component: CartComponent, title: 'cart' },
  { path: 'course_detail/:id', component: CourseDetailComponent, title: 'course_detail' },
  { path: 'checkOut', component: PaymentComponent, title: 'Check Out' },
  { path: 'profile', canActivate:[authGuard], component: ProfileComponent, title: 'profile' },
  { path: 'payment-success', canActivate:[authGuard], component: PaymentSuccessComponent, title: 'payment-success'},

  { path: '**', component: NotFoundComponent, title: 'Error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
