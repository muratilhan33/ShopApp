import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { CartDetailComponent } from "./cart-detail/cart-detail.component";
import { CheckoutComponent } from "./checkout/checkout.component";

@NgModule({
    imports: [ModelModule, CartDetailComponent, CheckoutComponent],
    providers: []
})

export class ShopModule {

}