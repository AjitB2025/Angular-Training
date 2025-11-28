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
    { id: 1, name: 'Laptop', price: 90000, discount:5, stock: 20, instock:true },
    { id: 2, name: 'Phone', price: 20000, discount:3, stock: 20, instock:true },
    { id: 3, name: 'Headphones', price: 1200, discount:0, stock: 20, instock:true },
    { id: 4, name: 'Desktop', price: 70000, discount:2, stock: 20, instock:true }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addItem({ ...product, quantity: 1 });
  }
}
