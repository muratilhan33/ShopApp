import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable({ providedIn: 'root' })
export class Cart {
    public items: CartItem[] = [];
    public itemCount: number = 0;
    public total: number = 0;

    addItem(product: Product, quantity: number = 1) {
        let item = this.items.find(i => i.product.id == product.id);
        if (item != undefined)
            item.quantity += quantity;
        else
            this.items.push(new CartItem(product, quantity));

        this.calculate();
    }

    calculate() {
        this.itemCount = 0;
        this.total = 0;

        this.items.forEach(item => {
            this.itemCount += item.quantity;
            this.total += (item.quantity * item.product.price!);
        });
    }

    removeItem(id: number) {
        let index = this.items.findIndex(i => i.product.id == id);
        this.items.splice(index, 1);
        this.calculate();
    }

    updateQuantity(product: Product, quantity: number) {
        let item = this.items.find(i => i.product.id == product.id);
        if (item != undefined) {
            item.quantity = quantity;
        }

        if (quantity == 0) {        // quantity 0 ise ürünü listeden sil
            this.removeItem(product.id!);
        }

        this.calculate();
    }

    clear() {
        this.items = [];
        this.itemCount = 0;
        this.total = 0;
    }
}

export class CartItem {
    constructor(
        public product: Product,
        public quantity: number
    ) { }
}