import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { CategoryRepository } from '../model/category.repository';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';
import { NavbarComponent } from "./navbar/navbar.component";
import { NgFor } from '@angular/common';
import { PriceFormatPipe } from '../price-format.pipe';

@Component({
  selector: 'shop',
  standalone: true,
  imports: [NavbarComponent, NgFor, PriceFormatPipe],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})

export class ShopComponent {
  public selectedCategory: Category | null = null;
  public productsPerPage = 3;
  public selectedPage = 1;

  constructor(private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository) { }

  get products(): Product[] {
    let index = (this.selectedPage - 1) * (this.productsPerPage);
    return this.productRepository.getProducts(this.selectedCategory)
      .slice(index, index + this.productsPerPage);
  }

  get pageNumbers(): number[] {
    return Array(
      Math.ceil(this.productRepository.
        getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0)
      .map((a, i) => i + 1)
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }

  changeCategory(newCategory?: Category) {
    this.selectedCategory = newCategory!;
  }

  changePage(p: number) {
    this.selectedPage = p;
  }
}
