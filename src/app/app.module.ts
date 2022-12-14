import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule } from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatBadgeModule} from '@angular/material/badge';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';


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
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminBooksComponent } from './components/admin-books/admin-books.component';
import { GetOrdersComponent } from './components/get-orders/get-orders.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { GetAllAdminBooksComponent } from './components/get-all-admin-books/get-all-admin-books.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { AddBookComponent } from './components/add-book/add-book.component';

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
    AdminRegistrationFormComponent,
    AdminDashboardComponent,
    AdminOrdersComponent,
    GetOrdersComponent,
    AdminNavbarComponent,
    GetAllAdminBooksComponent,
    UpdateBookComponent,
    AdminBooksComponent,
    AddBookComponent
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
    MatSlideToggleModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    FormsModule

  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
