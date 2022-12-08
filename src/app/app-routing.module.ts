import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDescriptionComponent } from './components/book-description/book-description.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayBooksComponent } from './components/display-books/display-books.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserCartComponent } from './components/user-cart/user-cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'Book',component: BookDescriptionComponent},
  {path:'cart',component:UserCartComponent},
  {path:'wishlist',component:WishlistComponent},
  
  

  {path:'dashboard', component:DashboardComponent,
    children:[ 
      {path:'bookDetails',component:BookDetailsComponent},
      
    ],}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
