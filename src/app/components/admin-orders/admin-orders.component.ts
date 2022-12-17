import { Component, Input, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/bookService/book-service.service';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {
  @Input() OrderList: any =[];
  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity:any
  price: any;
  id: any;
  product_name:any;
  BookList=[]
  totalLength:any;
  page:number=1;
  Search = '';
  constructor( private book : BookServiceService,private dataService: DataService) { }


  displayedColumns: string[] = ['BookName','BookPrice','Quantiy','CustomerName','CustomerPhone','approve-btn'];

  ngOnInit(): void {
    this.dataService.getOrderBookDetails.subscribe((res: any)=>{
      console.log(res);
    })
    console.log(this.OrderList)
  }


}
