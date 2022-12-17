import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // share book details to quick view 
  private BookDetails = new BehaviorSubject([]);
  getBookDetails = this.BookDetails.asObservable();
  

  //share book details from cart to customer address
  private cartBooks = new BehaviorSubject([]);
  getCartBookDetails = this.cartBooks.asObservable();


  private OrderBookDetails = new BehaviorSubject([]);
  getOrderBookDetails = this.BookDetails.asObservable();

  constructor() { }

  SendBookDetails(book:any){
    this.BookDetails.next(book)
  }
  SendOrderBookDetails(book: any){
    this.OrderBookDetails.next(book)
  }
  sendCartBook(book: any){
    this.cartBooks.next(book);
  }
}
