import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessageListComponent } from './message-list/message-list.component';
var MessagesModule = /** @class */ (function () {
    function MessagesModule() {
    }
    MessagesModule = tslib_1.__decorate([
        NgModule({
            declarations: [MessageListComponent],
            imports: [
                CommonModule,
                MessagesRoutingModule
            ]
        })
    ], MessagesModule);
    return MessagesModule;
}());
export { MessagesModule };
//# sourceMappingURL=messages.module.js.map