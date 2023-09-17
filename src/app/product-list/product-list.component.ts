import { Component } from '@angular/core';

import { Product } from '../products';
import { ProductsService } from '../services/products-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products!: Product[];
  subscriptions!: Subscription;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.subscriptions = this.productsService.getProducts().subscribe({
      next: (products) => (this.products = products),
      error: (error) => console.log(error),
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
