import { Injectable } from '@angular/core';
import { CartProduct, Product } from '../products';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  counter = 0;

  //track and update number total number of cart items
  private cartCountUpdates = new Subject<number>();
  cartCountUpdates$ = this.cartCountUpdates.asObservable();

  // track and update cart items in cart
  private cartItem = new Subject<Product>();
  cartItem$ = this.cartItem.asObservable();

  cartItems: CartProduct[] = [];

  getCartItems(): any {
    return JSON.parse(JSON.stringify(localStorage.getItem('cart-items')));
  }

  addToCart(product: Product) {
    this.counter += 1;
    console.log(this.counter);
    let cartProduct: CartProduct = this.cartItems?.find(
      (item) => item.product.id === product.id
    ) as CartProduct;

    if (cartProduct) {
      cartProduct.quantity += 1;
      this.cartCountUpdates.next(this.counter);
      this.cartItem.next(product);

      this.cartItems.map((item) =>
        item.product.id === product.id ? cartProduct : item
      );
    } else {
      this.cartCountUpdates.next(this.counter);
      this.cartItem.next(product);

      this.cartItems.push({ product: product, quantity: 1 });
    }
    localStorage.setItem('cart-items', JSON.stringify(this.cartItems));
  }
}
