import { Injectable, OnInit } from '@angular/core';
import { Product } from './product.model';
import { RestService } from './rest.service';
import { Category } from './category.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductRepository {

  private products: Product[] = [];
  private productsSubject = new BehaviorSubject<Product[]>([]);

  products$ = this.productsSubject.asObservable();

  constructor(private restService: RestService) {
    this.restService.getProducts()
      .subscribe(products => {
        this.products = products
        this.productsSubject.next(this.products); // Yeni ürünleri yayınlıyoruz
      });
  }

  getProduct(id: number): Product {
    return this.products.find(i => i.id == id)!;
  }

  getProducts(category: Category | null): Product[] {
    if (category)
      return this.products.filter(p => p.category == category?.name);
    else
      return this.products;
  }

  saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
      this.restService.addProduct(product)
        .subscribe(p => this.products.push(p));
    } else {
      this.restService.updateProduct(product).subscribe(p =>
        this.products.splice(this.products.findIndex(p => p.id == product.id), 1, product));
    }

  }

  deleteProduct(product: Product) {
    this.restService.deleteProduct(product)
      .subscribe(p => this.products.splice(this.products.findIndex(p => p.id == product.id), 1));
  }
}
