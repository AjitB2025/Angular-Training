import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, FormsModule]
  ,
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
   products = [
    { id: 1, name: 'Laptop', price: 90000 },
    { id: 2, name: 'Phone', price: 20000 },
    { id: 3, name: 'Headphones', price: 1200 },
    { id: 4, name: 'Desktop', price: 70000 }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addItem({ ...product, quantity: 1 });
  }
}
