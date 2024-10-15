import { CartServiceService } from './../../../services/cart-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css'
})
export class PaymentFormComponent {
  errorMessage: string | undefined;
  orederId:number = 0;
  constructor(private router: Router, private CartService:CartServiceService){}
  

  onSubmit() {
    if(this.CartService.getCartsData().length>0){
      this.navigateToPath('payment-success');
      const order = localStorage.setItem('orderSummary',JSON.stringify({
        orderID: this.orederId + 1, 
        totalPrice: this.CartService.totalPriceInCart(), 
        purchaseDate: new Date() 
      }));
      this.CartService.clearCart();
    }else{
      alert("Please select at least one course.");
      this.navigateToPath('courses');
    }
  }
  navigateToPath(path: string) {
    this.router.navigate([path]);
  }

}
