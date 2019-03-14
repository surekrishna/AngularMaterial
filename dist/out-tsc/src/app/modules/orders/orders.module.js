import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { MatTabsModule } from '@angular/material/tabs';
var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = tslib_1.__decorate([
        NgModule({
            declarations: [OrderListComponent],
            imports: [
                CommonModule,
                OrdersRoutingModule,
                MatTabsModule
            ]
        })
    ], OrdersModule);
    return OrdersModule;
}());
export { OrdersModule };
//# sourceMappingURL=orders.module.js.map