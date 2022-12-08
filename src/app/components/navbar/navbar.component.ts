import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isProfile = false;
  isLoggedIn = false;
  token: any;
  constructor(private route: Router,private dataService: DataService) { }

  ngOnInit(): void {
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
