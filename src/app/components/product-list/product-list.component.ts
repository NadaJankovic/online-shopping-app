import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
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
export class ProductListComponent implements OnInit, OnChanges {
  products!: Product[];
  subscriptions!: Subscription;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.navigate(['/product-list']);
    this.products = JSON.parse(this.productsService.getProducts());
  }

  ngOnChanges(value: SimpleChanges) {
    console.log(value);
  }
}
