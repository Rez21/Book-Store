import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  product_id: any;
  token: any
 
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
   }


  addToWishlist(book:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.addToCart("/bookstore_user/add_wish_list/"+book.product_id,book, true, header)
  }
  // wishlistItems(){
  //   this.token = localStorage.getItem('token')
  //   let header = {
  //     headers: new HttpHeaders({
  //       'accept': 'application/json',
  //       // 'x-access-token': this.token
  //     })
  //   }
  //   return this.httpService.getcartItems("/bookstore_user/get_wishlist_items",true, header)
  // }

}
