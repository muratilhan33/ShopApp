import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryRepository } from '../../../model/category.repository';
import { RouterLink } from '@angular/router';
import { Category } from '../../../model/category.model';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {

  constructor(private categoryRepository: CategoryRepository) { }

  getCategories() {
    return this.categoryRepository.getCategories();
  }

  deleteCategory(category: Category) {
    this.categoryRepository.deleteCategory(category);
  }
}
