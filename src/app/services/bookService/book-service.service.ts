import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  token: any;
  constructor(private httpService: HttpService) { }

  getAllBooks(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.httpService.getService("/bookstore_user/get/book", header)
  }


}
