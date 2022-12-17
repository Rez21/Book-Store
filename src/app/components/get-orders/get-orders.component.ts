import { Component, Input, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/bookService/book-service.service';

@Component({
  selector: 'app-get-orders',
  templateUrl: './get-orders.component.html',
  styleUrls: ['./get-orders.component.scss']
})
export class GetOrdersComponent implements OnInit {
  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity:any
  price: any;
  id: any;
  product_name:any;
  BookList=[]
  constructor(private book:BookServiceService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders(){
    this.book.getAllBookOrder().subscribe((res: any)=>{
      console.log(res);
      this.BookList = res.result;
      console.log(this.BookList);
    })
  }

}
