import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  signal,
} from '@angular/core';
import { Product } from '../../products';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product!: Product;
  @Input() products!: Product[];

  buttonLabel = 'Add to Cart';
  isAddToCartButtobDisabled = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    if (!!this.product && this.product.isAddedToCart) {
      this.isAddToCartButtobDisabled = !this.product.isAddedToCart;
    }
  }

  addToCart(product: Product) {
    this.product.isAddedToCart = true;
    this.isAddToCartButtobDisabled = this.product.isAddedToCart;
    this.cartService.addToCart(product);
    this.buttonLabel = 'Item Added';
  }
}
