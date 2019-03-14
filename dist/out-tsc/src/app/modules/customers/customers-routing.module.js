import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
var routes = [
    {
        path: '',
        component: CustomerListComponent
    }
];
var CustomersRoutingModule = /** @class */ (function () {
    function CustomersRoutingModule() {
    }
    CustomersRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], CustomersRoutingModule);
    return CustomersRoutingModule;
}());
export { CustomersRoutingModule };
//# sourceMappingURL=customers-routing.module.js.map