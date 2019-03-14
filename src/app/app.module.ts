import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//Material section
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

//Routing section
import { AppRoutingModule } from './app-routing.module';
import { CustomersModule } from './modules/customers/customers.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    CustomersModule,
    //Material section
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,   
    MatToolbarModule,
    MatMenuModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
