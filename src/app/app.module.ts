import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatBadgeModule} from '@angular/material/badge';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DisplayBooksComponent } from './components/display-books/display-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookDescriptionComponent } from './components/book-description/book-description.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { UserCartComponent } from './components/user-cart/user-cart.component';
import { AuthGuardService } from './services/authguardServices/auth-guard.service';
import { FilterPipe } from './Pipe/filter.pipe';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { AdminLoginFormComponent } from './components/admin-login-form/admin-login-form.component';
import { AdminRegistrationFormComponent } from './components/admin-registration-form/admin-registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    LoginFormComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    DisplayBooksComponent,
    BookDetailsComponent,
    BookDescriptionComponent,
    WishlistComponent,
    UserCartComponent,
    FilterPipe,
    CustomerDetailsComponent,
    OrderSummaryComponent,
    PlaceOrderComponent,
    AdminLoginFormComponent,
    AdminRegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatBadgeModule,
    NgxPaginationModule,
    MatRadioModule,
    MatSlideToggleModule

  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
