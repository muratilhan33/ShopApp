import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './auth.guard';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryFormComponent } from './categories/category-form/category-form.component';
import { OrderListComponent } from './orders/order-list/order-list.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: 'main', component: AdminComponent, canActivate: [AuthGuard], children: [
      // Products routes
      { path: 'products/:mode/:id', component: ProductFormComponent },
      { path: 'products/:mode', component: ProductFormComponent },
      { path: 'products', component: ProductListComponent }, // List products

      // Categories routes
      { path: 'categories/:mode/:id', component: CategoryFormComponent },
      { path: 'categories/:mode', component: CategoryFormComponent },
      { path: 'categories', component: CategoryListComponent }, // List categories

      // Orders routes
      { path: 'orders', component: OrderListComponent }, // List orders
    ]
  },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
