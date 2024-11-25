import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CartDetailComponent } from './shop/cart-detail/cart-detail.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';

export const routes: Routes = [
    { path: 'shop', component: ShopComponent },
    { path: 'cart', component: CartDetailComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'admin', loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule) },
    { path: '**', redirectTo: "/shop" }
];
