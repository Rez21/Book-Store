import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private route: Router,private dataService: DataService) { }

  ngOnInit(): void {
  }

  searchBook(event:any){
    this.dataService.SendBookDetails(event.target.value)
  }
  redirectToLogout() {
    localStorage.removeItem('token');
    this.route.navigateByUrl("/login")
  }

  redirectToOrders(){
    this.route.navigateByUrl('/AdminHome/orders')
  }
  redirectToDashBoard(){
    this.route.navigateByUrl('/AdminHome/admin-books')
  }
}
