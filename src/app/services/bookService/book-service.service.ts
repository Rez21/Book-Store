import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  token: any;
  constructor(private httpService: HttpService) { 
    this.token = localStorage.getItem('token')
  }

  getAllBooks(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.httpService.getService("/bookstore_user/get/book", header)
  }

  
  quantity(bookId:any,req:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.putService("/bookstore_user/cart_item_quantity/"+bookId, req, true, header)
  }

  order(Book:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService("/bookstore_user/add/order", Book, true, header)
  }
}
