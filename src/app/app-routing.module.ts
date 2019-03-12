import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path : 'customers',
        loadChildren : './modules/customers/customers.module#CustomersModule'
    },
    {
        path : 'messages',
        loadChildren : './modules/messages/messages.module#MessagesModule'
    },
    {
        path : 'orders',
        loadChildren : './modules/orders/orders.module#OrdersModule'
    },
    {
        path : '',
        redirectTo : '',
        pathMatch : 'full'
    }
];

@NgModule({
    imports : [ RouterModule.forRoot(routes) ],
    exports : [ RouterModule ]
})
export class AppRoutingModule{}