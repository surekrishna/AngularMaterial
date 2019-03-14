import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageListComponent } from './message-list/message-list.component';
var routes = [
    {
        path: '',
        component: MessageListComponent
    }
];
var MessagesRoutingModule = /** @class */ (function () {
    function MessagesRoutingModule() {
    }
    MessagesRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], MessagesRoutingModule);
    return MessagesRoutingModule;
}());
export { MessagesRoutingModule };
//# sourceMappingURL=messages-routing.module.js.map