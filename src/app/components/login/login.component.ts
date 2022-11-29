import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  islogin=false;
  isSignUp=false;
 
  constructor() { }

  ngOnInit(): void {
  }
  
}
