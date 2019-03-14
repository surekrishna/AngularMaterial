import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = tslib_1.__decorate([
        NgModule({
            declarations: [CustomerListComponent, CustomerCardComponent],
            imports: [
                CommonModule,
                CustomersRoutingModule
            ]
        })
    ], CustomersModule);
    return CustomersModule;
}());
export { CustomersModule };
//# sourceMappingURL=customers.module.js.map