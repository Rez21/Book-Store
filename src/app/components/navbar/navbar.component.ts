import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isProfile = false;
  isLoggedIn = false;
  token: any;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }


  redirectToLogin() {
    this.route.navigateByUrl('/login');
  }
  redirectToLogout() {
    this.isLoggedIn = false;
    localStorage.clear();
  }
}
