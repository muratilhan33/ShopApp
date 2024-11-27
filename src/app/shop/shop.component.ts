import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';
import { NavbarComponent } from "./navbar/navbar.component";
import { NgClass, NgFor } from '@angular/common';
import { CartSummaryComponent } from "./cart-summary/cart-summary.component";
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from "./product-list/product-list.component";
import { CategoryListComponent } from "./category-list/category-list.component";
@Component({
  selector: 'shop',
  standalone: true,
  imports: [NavbarComponent, NgFor, CartSummaryComponent, CartSummaryComponent, FormsModule, ProductListComponent, CategoryListComponent, NgClass],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})

export class ShopComponent implements OnInit {
  public selectedCategory: Category | null = null;
  public productsPerPage = 6;
  public selectedPage = 1;
  public selectedProducts: Product[] = []; // Aktif sayfadaki ürünler
  screenWidth = window.innerWidth;

  constructor(
    private productRepository: ProductRepository) {
    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth;
    })
  }

  ngOnInit(): void {
    this.updateSelectedProducts();
    this.productRepository.products$.subscribe(() => {
      this.updateSelectedProducts();
    })
  }

  updateSelectedProducts(): void {
    this.selectedProducts = this.productRepository.getProducts(this.selectedCategory);
  }

  get products(): Product[] {
    const startIndex = (this.selectedPage - 1) * this.productsPerPage;
    const endIndex = startIndex + this.productsPerPage;
    console.log(this.selectedProducts.slice(startIndex, endIndex))
    return this.selectedProducts.slice(startIndex, endIndex);
  }

  get pageNumbers(): number[] {
    return Array(
      Math.ceil(this.productRepository.
        getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0)
      .map((a, i) => i + 1)
  }

  changePage(p: number) {
    this.selectedPage = p;
    this.updateSelectedProducts();
  }

  changePageSize(size: any) {
    this.productsPerPage = +size.value;
    this.changePage(1);
    this.updateSelectedProducts();
  }

  getCategory(category: Category) {
    this.selectedCategory = category;
  }

}
