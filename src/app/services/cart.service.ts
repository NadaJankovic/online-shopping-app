import { Injectable } from '@angular/core';
import { CartProduct, Product } from '../products';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductsService } from './products-service.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private productsService: ProductsService) {}
  counter = 0;

  //track and update number total number of cart items
  private cartCountUpdates = new BehaviorSubject<number>(0);
  cartCountUpdates$ = this.cartCountUpdates.asObservable();

  // track and update cart items in cart
  private cartItem = new Subject<CartProduct>();
  cartItem$ = this.cartItem.asObservable();

  private cartItems: CartProduct[] = [];

  getCartItems(): any {
    return localStorage.getItem('cart-items');
  }

  addToCart(product: Product) {
    this.counter += 1;
    let cartProduct: CartProduct = this.cartItems?.find(
      (item) => item.product.id === product.id
    ) as CartProduct;

    if (cartProduct) {
      cartProduct.quantity += 1;
      product.isAddedToCart = true;
      this.cartCountUpdates.next(this.counter);
      this.cartItem.next(cartProduct);
    } else {
      product.isAddedToCart = true;
      this.cartCountUpdates.next(this.counter);
      this.cartItem.next(cartProduct);

      this.cartItems.push({ product: product, quantity: 1 });
    }
    console.log(this.cartItems);
    localStorage.setItem('cart-items', JSON.stringify(this.cartItems));
    this.productsService.updateProduct(product);
  }
}
