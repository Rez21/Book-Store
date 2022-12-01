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


}
