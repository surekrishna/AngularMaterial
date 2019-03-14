import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';

//Material section
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ CustomerListComponent, CustomerCardComponent ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    //Material
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CustomersModule { }
