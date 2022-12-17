import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseurl
  
  constructor(private httpclient:HttpClient) { }

  postService(url: string, reqData: any, token: boolean = false, httpOptions: any) {
    return this.httpclient.post(this.baseUrl+url,reqData,token && httpOptions)
  }

  getService(url: string, httpOptions: any) {
    return this.httpclient.get(this.baseUrl+url, httpOptions)
  }
  
  deleteCartItems(url: string, token: boolean=true, httpOptions: any){
    return this.httpclient.delete(this.baseUrl+url,token && httpOptions)
  }

  addToCart(url: string,payload:any, token: boolean=true, httpOptions: any) {
    return this.httpclient.post(this.baseUrl+url,payload,token && httpOptions)
  }

  getcartItems(url: string, token: boolean=true, httpOptions: any){
    return this.httpclient.get(this.baseUrl+url,token && httpOptions)
  }



  addToWishlist(url: string,payload:any, token: boolean=true, httpOptions: any) {
    return this.httpclient.post(this.baseUrl+url,payload,token && httpOptions)
  }

  getWishlistItems(url: string, token: boolean=true, httpOptions: any){
    return this.httpclient.get(this.baseUrl+url,token && httpOptions)
  }

  addFeedback(url: string,payload:any, token: boolean=true, httpOptions: any) {
    return this.httpclient.post(this.baseUrl+url,payload,token && httpOptions)
  }
  putService(url: string, reqData: any, token: boolean = true, httpOptions: any) {
    return this.httpclient.put(this.baseUrl+url,reqData,token && httpOptions)
  }


  getBookService(url: string,token: boolean = true, httpOptions: any) {
    return this.httpclient.get(this.baseUrl+url,token && httpOptions)
  }
  // addToWishLlist(url: string, reqData: any, token: boolean = false, httpOptions: any) {
  //   return this.httpclient.post(this.baseUrl+url,reqData,token && httpOptions)
  // }
}
