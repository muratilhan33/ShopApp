import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { ShopComponent } from "./shop.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CartDetailComponent } from "./cart-detail/cart-detail.component";
import { CheckoutComponent } from "./checkout/checkout.component";

@NgModule({
    imports: [ModelModule, CartDetailComponent, CheckoutComponent],
    providers: [],
    exports: [CartDetailComponent, CheckoutComponent]
})

export class ShopModule {

}