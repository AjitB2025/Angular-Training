import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService, CartItem  } from '../cart.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit {
cartItems: CartItem[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

   ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.total = this.cartService.getTotal();
    });
  }

  remove(id: number) { 
    this.cartService.removeItem(id);
  }

  clear() { 
    this.cartService.clearCart();
  }

  updateQuantity(id: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    this.cartService.updateQuantity(id, +input.value);
  }
}