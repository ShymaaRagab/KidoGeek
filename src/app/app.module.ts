import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//Our Commponents
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterpagesComponent } from './footerpages/footerpages.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogComponent } from './blog/blog.component';
import { CommunityComponent } from './community/community.component';
import { CourseComponent } from './course/course.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { QuesBlogComponent } from './blog/ques-blog/ques-blog.component';
import { BlogCardComponent } from './blog/blog-card/blog-card.component';
import { MaincoursesComponent } from './course/maincourses/maincourses.component';
import { CoursecatigoryComponent } from './course/coursecatigory/coursecatigory.component';
import { SearchPipe } from './search.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search/search-result/search-result.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderSummaryComponent } from './payment/order-summary/order-summary.component';
import { PaymentFormComponent } from './payment/payment-form/payment-form.component';
import { LoginComponent } from './login/login.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterpagesComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    BlogComponent,
    CommunityComponent,
    CourseComponent,
    TopHeaderComponent,
    QuesBlogComponent,
    BlogCardComponent,
    MaincoursesComponent,
    CoursecatigoryComponent,
    SearchPipe,
    RegisterComponent,
    SearchComponent,
    SearchResultComponent,
    CartComponent,
    ProfileComponent,
    CourseDetailComponent,
    PaymentComponent,
    OrderSummaryComponent,
    PaymentFormComponent,
    LoginComponent,
    PaymentSuccessComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
