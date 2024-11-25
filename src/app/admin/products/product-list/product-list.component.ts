import { Component } from '@angular/core';
import { ProductRepository } from '../../../model/product.repository';
import { NgFor, NgIf } from '@angular/common';
import { PriceFormatPipe } from '../../../price-format.pipe';
import { RouterLink } from '@angular/router';
import { Product } from '../../../model/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, PriceFormatPipe, NgIf, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  isLoading: boolean = true;

  constructor(private productRepository: ProductRepository) { }

  getProducts() {
    return this.productRepository.getProducts(null);
  }

  onImageLoad() {
    const totalProducts = this.getProducts().length;
    const loadedImages = document.querySelectorAll('.product-image-loaded').length;

    if (totalProducts === loadedImages)
      this.isLoading = false;
  }

  deleteProduct(product: Product) {
    this.productRepository.deleteProduct(product);
  }
}
