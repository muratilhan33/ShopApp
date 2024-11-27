import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PriceFormatPipe } from '../../price-format.pipe';
import { Product } from '../../model/product.model';
import { Cart } from '../../model/cart.model';
import { ProductRepository } from '../../model/product.repository';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [NgFor, PriceFormatPipe, NgIf, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})


export class ProductListComponent {
  @Input() products: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(
    private cart: Cart,
    private productRepository: ProductRepository
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.products = this.productRepository.getProducts(null);
  }

  addProductToCart(product: Product) {
    this.cart.addItem(product);
  }

  displayDetails(product: Product) {
    this.selectedProduct = product;
  }

  hideDetails() {
    this.selectedProduct = null;
  }
}
