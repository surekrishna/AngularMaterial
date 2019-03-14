import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    {
        path: 'customers',
        loadChildren: './modules/customers/customers.module#CustomersModule'
    },
    {
        path: 'messages',
        loadChildren: './modules/messages/messages.module#MessagesModule'
    },
    {
        path: 'orders',
        loadChildren: './modules/orders/orders.module#OrdersModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map