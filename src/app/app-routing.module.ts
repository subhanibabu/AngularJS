import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { AppComponent } from './app.component';

const routes: any = [
   {
      path : '#',component: AppComponent
   },
   {
      path : 'customer',component: CustomersComponent      
   },
   {
      path : 'customer',component: CustomersComponent      
   },
   {
      path:'product',component:ProductsComponent
   },
   {
      path:'order', component:OrdersComponent      
   },
   {
      path:'order/:id', component:OrdersComponent      
   }
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
   ]
})
export class AppRoutingModule { }
