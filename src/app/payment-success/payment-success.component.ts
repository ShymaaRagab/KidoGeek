import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.css'
})
export class PaymentSuccessComponent {
  orderID: string = '';
  totalPrice: number = 0;
  purchaseDate: Date = new Date();

  constructor(private router: Router) {}

  ngOnInit(): void {
    const orderData = JSON.parse(localStorage.getItem('orderSummary') || '{}');
    this.orderID = orderData.orderID || '123456789';
    this.totalPrice = orderData.totalPrice || 0;
    this.purchaseDate = new Date(); // Set to the actual date if available
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToCourses() {
    this.router.navigate(['/courses']);
  }
}
