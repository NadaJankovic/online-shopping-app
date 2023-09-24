import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { CartProduct } from '../../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit, OnDestroy {
  cartCount: number | undefined;
  subscriptions!: Subscription;
  localStogargeCartItems: any;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.cartCountUpdates$.subscribe(
      (value) => (this.cartCount = value)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  openCartDetails() {
    this.router.navigate(['/cart-details']);
  }
}
