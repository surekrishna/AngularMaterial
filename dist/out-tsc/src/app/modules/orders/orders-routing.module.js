import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
var routes = [
    {
        path: '',
        component: OrderListComponent
    }
];
var OrdersRoutingModule = /** @class */ (function () {
    function OrdersRoutingModule() {
    }
    OrdersRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], OrdersRoutingModule);
    return OrdersRoutingModule;
}());
export { OrdersRoutingModule };
//# sourceMappingURL=orders-routing.module.js.map