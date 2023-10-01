import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
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
export class ProductDetailsComponent {
  @Input() product!: Product;
  @Input() products!: Product[];

  buttonLabel = 'Add to Cart';

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.product.isAddedToCart = true;
    this.cartService.addToCart(product);
    this.buttonLabel = 'Item Added';
  }
}
