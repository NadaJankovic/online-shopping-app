import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Product } from '../products';
import fakeApiProducts from '../../fakeApiProducts.json';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //products from fetchedPr0ducts.ts are fetched from bellow API
  // productUrl = 'https://fakestoreapi.com/products';

  constructor() {}

  //get all products from api
  // private productItems = new Subject<Product[]>();
  // productItems$ = this.productItems.asObservable();

  setProducts() {
    let products = [fakeApiProducts].map((items) =>
      items.map((item: any) => Object.assign(item, { isAddedToCart: false }))
    );
    return localStorage.setItem('product-items', JSON.stringify(products[0]));
  }

  /**
   * if local storage is empty, set local storage, else get items from local storage
   */
  getProducts(): any {
    if (localStorage.getItem('product-items') === null) {
      this.setProducts();
    }
    return localStorage.getItem('product-items');
  }

  updateProduct(product: Product) {
    let products: Product[] = JSON.parse(this.getProducts());
    console.log(typeof products);
    products.find((el) => {
      if (el.id === product.id) {
        el.isAddedToCart = product.isAddedToCart;
      }
    });
    return localStorage.setItem('product-items', JSON.stringify(products));
  }
}
