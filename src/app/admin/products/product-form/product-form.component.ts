import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from '../../../model/product.model';
import { ProductRepository } from '../../../model/product.repository';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  editing: boolean = false;
  product: Product = new Product();

  constructor(private activeRoute: ActivatedRoute, private repository: ProductRepository, private router: Router) {
    this.editing = activeRoute.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      this.product = repository.getProduct(activeRoute.snapshot.params['id']);
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
}
