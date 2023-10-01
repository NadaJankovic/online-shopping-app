import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CartProduct } from 'src/app/products';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit, OnDestroy {
  cartCount!: number;
  subscriptions!: Subscription;
  localStogargeCartItems: any;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.cartCountUpdates$.subscribe(
      (value) => (this.cartCount = value)
    );
  }

  // ngOnChanges(value: SimpleChanges) {
  //   console.log(value);
  // }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  openCartDetails() {
    this.router.navigate(['/cart-details']);
  }
}
