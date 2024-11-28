import { Component } from '@angular/core';
import { Cart } from '../../model/cart.model';
import { NavbarComponent } from "../navbar/navbar.component";
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PriceFormatPipe } from '../../price-format.pipe';
import { CartService } from '../../model/cart.service';

@Component({
  selector: 'cart-detail',
  standalone: true,
  imports: [NavbarComponent, NgIf, RouterLink, NgFor, PriceFormatPipe],
  templateUrl: './cart-detail.component.html',
  styleUrl: './cart-detail.component.css'
})
export class CartDetailComponent {
  constructor(public cart: Cart, private cartService: CartService) {

  }

  ngOnInit(): void {
    this.cartService.setCart(this.cart);
  }

  updateCart(cart: any): void {
    this.cart = cart;
    this.cartService.setCart(this.cart);
  }
}
