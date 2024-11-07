import { Injectable, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Category } from './category.model';

@Injectable({ providedIn: 'root' })
export class CategoryRepository implements OnInit {

    private categories: Category[] = [];

    constructor(private restService: RestService) {
        this.restService.getCategories()
            .subscribe(categories => { this.categories = categories });
    }

    ngOnInit(): void {

    }

    getCategory(id: number): Category {
        return this.categories.find(i => i.id === id)!;
    }

    getCategories(): Category[] {
        return this.categories;
    }
}
