import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent {
  constructor(private router: Router) {}
  returnToProductList() {
    this.router.navigate(['/product-list']);
  }
}
