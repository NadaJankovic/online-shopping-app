import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit, OnDestroy {
  cartCount: number | undefined;
  subscriptions!: Subscription;

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.cartCountUpdates$.subscribe(
      (value) => (this.cartCount = value)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
