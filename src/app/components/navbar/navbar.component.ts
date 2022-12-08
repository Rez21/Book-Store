import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cartService/cart.service';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() recieveCartBookList: any
  isProfile = false;
  isLoggedIn = false;
  token: any;
  content: any
  constructor(private route: Router,private dataService: DataService,private cartService: CartService) { 
    this.content = localStorage.getItem('cartItem')
  }
  
  ngOnInit(): void {
    this.cartService.cartItems();
    localStorage.getItem('cartItem')

  }


  searchBook(event:any){
    this.dataService.SendBookDetails(event.target.value)
  }
  redirectToLogin() {
    this.route.navigateByUrl('/login');
  }
  redirectToLogout() {
    localStorage.removeItem('token');
    this.route.navigateByUrl("/login")
  }
  redirectToCart(){
    this.route.navigateByUrl('/cart');
  }
  redirectToWishlist(){
    this.route.navigateByUrl('wishlist')
  }
}
