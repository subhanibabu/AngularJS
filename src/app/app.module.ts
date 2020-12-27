import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ParentComponent} from './inputoutputdemo/parent/parent.component';
import {ChildComponent} from './inputoutputdemo/child/child.component';

@NgModule({
   declarations: [
      AppComponent,
      ProductsComponent,
      OrdersComponent,
      CustomersComponent,
      HeaderComponent,
      FooterComponent,
      ParentComponent,
      ChildComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
