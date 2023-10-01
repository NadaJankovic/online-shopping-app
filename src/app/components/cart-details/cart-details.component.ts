import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from 'src/app/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent implements OnInit {
  cartItems!: CartProduct[];
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartItems = JSON.parse(this.cartService.getCartItems());
    console.log(this.cartItems);
  }

  returnToProductList() {
    this.router.navigate(['/product-list']);
  }
}
