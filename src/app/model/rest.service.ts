import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from './product.model';
import { Category } from './category.model';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseUrl: string = "https://shopapp-web-service.onrender.com/";
  token: string | null = null;
  headerToken: HttpHeaders | null = null;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + 'products', product,
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer<${this.token}>`
        })
      });
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.baseUrl + 'products/' + product.id, product, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.token}>`
      })
    });
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + 'categories');
  }

  getOrders() {
    return this.http.get(this.baseUrl + 'orders');
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }

  authentication(username: string, password: string): Observable<Boolean> {
    return this.http.post<any>(this.baseUrl + 'login', {
      username: username,
      password: password
    }).pipe(map(response => {
      this.token = response.success ? response.token : null;
      console.log(this.token);
      return response.success;
    }))
  }

  deleteProduct(product: Product): Observable<Product> {
    return this.http.delete<Product>(this.baseUrl + "products/" + product.id, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.token}>`
      })
    })
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl + 'categories', category, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.token}>`
      })
    })
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(this.baseUrl + 'categories/' + category.id, category, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.token}>`
      })
    })
  }

  deleteCategory(category: Category): Observable<Category> {
    return this.http.delete<Category>(this.baseUrl + 'categories/' + category.id, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.token}>`
      })
    })
  }

}
