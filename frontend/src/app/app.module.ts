import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductsComponent } from './products/products.component';
import { CartsComponent } from './carts/carts.component';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrdersComponent,
    CustomerComponent,
    ProductsComponent,
    CartsComponent,
    UsersComponent,
    NavbarComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    // BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
