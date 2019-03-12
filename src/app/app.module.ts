import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Material section
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { MessageListComponent } from './components/messages/message-list/message-list.component';

//Routing section
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    OrderListComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    //Material section
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
