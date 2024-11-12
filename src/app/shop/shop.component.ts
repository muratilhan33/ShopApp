import { Component, NgModule } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { CategoryRepository } from '../model/category.repository';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';
import { NavbarComponent } from "./navbar/navbar.component";
import { NgFor } from '@angular/common';
import { PriceFormatPipe } from '../price-format.pipe';
import { Cart } from '../model/cart.model';
import { CartSummaryComponent } from "./cart-summary/cart-summary.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'shop',
  standalone: true,
  imports: [NavbarComponent, NgFor, PriceFormatPipe, CartSummaryComponent, CartSummaryComponent, FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})

export class ShopComponent {
  public selectedCategory: Category | null = null;
  public productsPerPage = 6;
  public selectedPage = 1;
  public selectedProducts: Product[] = []; // Aktif sayfadaki ürünler

  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository,
    private cart: Cart
  ) {

  }

  ngOnInit(): void {
    this.updateSelectedProducts();
    this.changeCategory();
  }

  updateSelectedProducts(): void {
    this.selectedProducts = this.productRepository.getProducts(this.selectedCategory);
  }

  get products(): Product[] {
    return this.selectedProducts
      .slice(((this.selectedPage - 1) * (this.productsPerPage)), ((this.selectedPage - 1) * (this.productsPerPage)) + this.productsPerPage);
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
    this.updateSelectedProducts();
    this.selectedCategory = newCategory!;
    this.changePage(1);
  }

  changePage(p: number) {
    this.updateSelectedProducts();
    this.selectedPage = p;
    console.log('page ' + p);
    console.log('selected category ' + this.selectedCategory?.name);
    console.log('prodcuts per page ' + this.productsPerPage);
  }

  addProductToCart(product: Product) {
    this.cart.addItem(product);
  }

  changePageSize(size: number) {
    this.productsPerPage = size;
    this.changePage(1);
  }

}
