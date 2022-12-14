import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  product_id: any;
  token: any
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
   }


  addToCart(book:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.addToCart("/bookstore_user/add_cart_item/"+book.product_id,book, true, header)
  }

  cartItems(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.getcartItems("/bookstore_user/get_cart_items",true, header)
  }
  deleteItem(cartItemId_id: any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.deleteCartItems("/bookstore_user/remove_cart_item/"+cartItemId_id,true,header)
  }
}
