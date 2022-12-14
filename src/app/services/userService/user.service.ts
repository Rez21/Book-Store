import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private httpService: HttpService) { }
  
  signup(payload:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService("/bookstore_user/registration", payload, false, header)
  }

  login(result:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        
      })
    }
    return this.httpService.postService("/bookstore_user/login", result, true, header)
  }

  adminSignUp(payload:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService("/bookstore_user/admin/registration", payload, false, header)
  }

  adminLogin(result:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        
      })
    }
    return this.httpService.postService("/bookstore_user/admin/login", result, true, header)
  }
}
