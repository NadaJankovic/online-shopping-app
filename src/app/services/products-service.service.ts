import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  #productUrl = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) {}

  //get all products from api
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.#productUrl);
  }
}
