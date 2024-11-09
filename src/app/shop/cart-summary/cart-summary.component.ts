import { Component } from '@angular/core';
import { Cart } from '../../model/cart.model';
import { PriceFormatPipe } from '../../price-format.pipe';
import { NgIf } from '@angular/common';

@Component({
  selector: 'cart-summary',
  standalone: true,
  imports: [PriceFormatPipe, NgIf],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent {
  constructor(public cart: Cart) {

  }

}
