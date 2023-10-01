import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { Product } from '../../products';
import { ProductsService } from '../../services/products-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products!: Product[];
  subscriptions!: Subscription;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.navigate(['/product-list']);
    this.subscriptions = this.productsService.getProducts().subscribe({
      next: (productsFromApi) => (this.products = productsFromApi),
      error: (e) => console.log(e),
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
