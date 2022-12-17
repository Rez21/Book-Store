import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { AdminBooksComponent } from './components/admin-books/admin-books.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLoginFormComponent } from './components/admin-login-form/admin-login-form.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { BookDescriptionComponent } from './components/book-description/book-description.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayBooksComponent } from './components/display-books/display-books.component';
import { GetAllAdminBooksComponent } from './components/get-all-admin-books/get-all-admin-books.component';
import { GetOrdersComponent } from './components/get-orders/get-orders.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserCartComponent } from './components/user-cart/user-cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'Book',component: BookDescriptionComponent},
  {path:'order', component: PlaceOrderComponent},
  {path:'cart',component:UserCartComponent,canActivate:[AuthenticationGuard]},
  {path:'wishlist',component:WishlistComponent,canActivate:[AuthenticationGuard]},
  
 

  {path:'dashboard', component:DashboardComponent,canActivate:[AuthenticationGuard],
    children:[ 
      {path:'bookDetails',component:BookDetailsComponent},
      
    ],},




    {path:'',redirectTo:"/admin-login",pathMatch:'full'},  
  {path:'admin-login', component:AdminLoginFormComponent},  
  {path:'AdminHome',component:AdminDashboardComponent,
    children:[
      {path:'admin-books',component: GetAllAdminBooksComponent},
      {path:'orders', component:GetOrdersComponent},
    ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
