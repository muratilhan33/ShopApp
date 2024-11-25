import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from '../../model/category.model';
import { ShopComponent } from '../shop.component';
import { CategoryRepository } from '../../model/category.repository';
import { NgFor } from '@angular/common';

@Component({
  selector: 'category-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  public selectedCategory: Category | null = null;
  @Output() category = new EventEmitter<Category>();

  constructor(private shopComponent: ShopComponent,
    private categoryRepository: CategoryRepository) { }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    //this.shopComponent.updateSelectedProducts();
    //this.changeCategory(this.selectedCategory!);
    this.changeCategory();
  }


  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }

  changeCategory(newCategory?: Category) {
    this.selectedCategory = newCategory || null; // Eğer kategori yoksa tüm ürünleri göster
    this.category.emit(newCategory);
    this.shopComponent.updateSelectedProducts();
    this.shopComponent.changePage(1);
  }
}
