import { Cart } from "./cart.model";

export class Order {

    constructor(
        public id: number,
        public name: string,
        public address: string,
        public city: string,
        public phone: string,
        public email: string,

        public isSent: boolean = false,

        public cart: Cart
    ) { }

    clearOrder() {
        this.id = null!;
        this.name = this.address = this.city = this.phone = this.email = null!;
        this.isSent = false;
        this.cart.clear();
    }
}