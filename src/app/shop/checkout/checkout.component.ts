import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Order } from '../../model/order.model';
import { OrderRepository } from '../../model/order.repository';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Cart } from '../../model/cart.model';

@Component({
  selector: 'checkout',
  standalone: true,
  imports: [NavbarComponent, NgIf, RouterLink, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  orderSent: Boolean = false;
  submitted: Boolean = false;
  order: Order;

  constructor(private orderRepository: OrderRepository, private cart: Cart) {
    this.order = new Order(0, '', '', '', '', '', false, this.cart);
  }

  submitOrder(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.orderRepository.saveOrder(this.order).subscribe(order => {
        this.order.clearOrder();
        this.orderSent = true;
        this.submitted = true;
      })
    }
  }

}
