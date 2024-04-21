import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductsComponent } from './products/products.component';
import { CartsComponent } from './carts/carts.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{
  path: '',
  component: LayoutComponent,
  canActivate: [AuthGuard],
  children: [

    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'orders', component: OrdersComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'carts', component: CartsComponent },
    { path: 'users', component: UsersComponent },
  ]
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
