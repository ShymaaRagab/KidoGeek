import { Component } from '@angular/core';
import { CartServiceService } from '../../../services/cart-service.service';
import { Router } from '@angular/router';
import { Course } from '../../../interfaces/course.interface';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent {
  open_summary:boolean = false;
  total: number = 0;
  constructor(private cartService: CartServiceService, private router: Router){}
  cartItems :Course[]=[];
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartsData();
  }
  
  totalPrice(){
    this.total=0;
    this.cartItems.forEach(c => {
      console.log(c.price)
      this.total += c.price;
    });
    return this.total;
  }
  navigateToPath(path:string){
    this.router.navigate([path]);
  }
  openSummary(){
    this.open_summary = !this.open_summary;
  }
}
