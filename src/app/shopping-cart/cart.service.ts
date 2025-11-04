import { Injectable } from '@angular/core';
//import { Item as CartItem } from './models/Item';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private storageKey = 'shoppingCart';

  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();


  constructor() {
    const saved = sessionStorage.getItem(this.storageKey);
    if (saved) {
      this.cartItems.next(JSON.parse(saved));
    }
  }

  get items(): CartItem[] {
    return this.cartItems.value;
  }

  addItem(item: CartItem): void {
    const items = [...this.items];
    const existing = items.find(i => i.id === item.id);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      items.push(item);
    }
    this.updateCart(items);
  }

  removeItem(id: number): void {
    const updated = this.items.filter(i => i.id !== id);
    this.updateCart(updated);
  }

  updateQuantity(id: number, qty: number): void {
    const items = [...this.items];
    const item = items.find(i => i.id === id);
    if (item) item.quantity = qty;
    this.updateCart(items);
  }

  clearCart(): void {
    this.updateCart([]);
  }

  getTotal(): number {
    return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }

  private updateCart(items: CartItem[]): void {
    this.cartItems.next(items);
    sessionStorage.setItem(this.storageKey, JSON.stringify(items));
  }
  // constructor() {
  //   // Initialize sessionStorage with demo data if empty
  //   //if (!sessionStorage.getItem(this.storageKey)) {
  
     
  // }

  // //Add Product to Cart
  // addToCart(item: CartItem): void {
     
  // }

  // //Get All Cart Items
  // getCartItems(): CartItem[] {
    
  //   return [];
  // }

  // //Update Quantity
  // updateQuantity(productId: number, quantity: number): void {
     
  // }

  // //Remove Product from Cart
  // removeFromCart(productId: number): void {
   
  // }

  // //Clear Entire Cart
  // clearCart(): void {
  
  // }

  // //Calculate Total Items
  // getTotalItems(): number {
  // return 45;
  // }

  // //Calculate Total Amount
  // getTotalPrice(): number {
  //   return 12;
  // }

  // // Private helper
  // private saveCart(cart: CartItem[]): void {
  //   //save data to sessionStorage
  // }
}
