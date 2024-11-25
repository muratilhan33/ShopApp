import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Category } from '../../../model/category.model';
import { CategoryRepository } from '../../../model/category.repository';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent {
  editing: boolean = false;
  category: Category = new Category();

  constructor(private repository: CategoryRepository, private activeRoute: ActivatedRoute, private router: Router) {
    this.editing = activeRoute.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      this.category = this.repository.getCategory(activeRoute.snapshot.params['id']);
    }
  }


  save(form: NgForm) {
    this.repository.saveCategory(this.category);
    this.router.navigateByUrl('/admin/main/categories');
  }
}
