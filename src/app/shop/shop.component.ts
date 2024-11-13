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
    const startIndex = (this.selectedPage - 1) * this.productsPerPage;
    const endIndex = startIndex + this.productsPerPage;

    return this.selectedProducts.slice(startIndex, endIndex);
  }

  get pageNumbers(): number[] {
    return Array(
      Math.ceil(this.productRepository.
        getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0)
      .map((a, i) => i + 1)
  }

  get categories(): Category[] {
    this.updateSelectedProducts();
    return this.categoryRepository.getCategories();
  }

  changeCategory(newCategory?: Category) {
    this.selectedCategory = newCategory || null; // Eğer kategori yoksa tüm ürünleri göster
    this.updateSelectedProducts();
    this.changePage(1);
  }

  changePage(p: number) {
    this.selectedPage = p;
    this.updateSelectedProducts();
  }

  addProductToCart(product: Product) {
    this.cart.addItem(product);
  }

  changePageSize(size: any) {
    this.productsPerPage = +size.value;
    this.changePage(1);
    this.updateSelectedProducts();
  }

}
