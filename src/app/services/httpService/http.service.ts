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

  addToCart(url: string,payload:any, token: boolean=true, httpOptions: any) {
    return this.httpclient.post(this.baseUrl+url,payload,token && httpOptions)
  }

  // addToWishLlist(url: string, reqData: any, token: boolean = false, httpOptions: any) {
  //   return this.httpclient.post(this.baseUrl+url,reqData,token && httpOptions)
  // }
}
