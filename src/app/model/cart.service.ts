import { Injectable } from '@angular/core';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart;
  constructor() { }

  setCart(cart: Cart): void {
    this.cart = cart;
  }

  getCart(): Cart {
    return this.cart;
  }
}
