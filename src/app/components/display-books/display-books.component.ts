import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit {
  @Input() receiveBookList: any;


  bookName: any;
  author: any;
  quantity: any
  discountPrice: any;
  price: any;
  totalLength: any;
  page: number = 1;
  Search = '';
  constructor(private route: Router, private dataService: DataService) { }

  ngOnInit(): void {
  
    this.dataService.getBookDetails.subscribe((res: any) => {
      console.log(res)
      this.Search = res;
      this.totalLength = res.length;
    })
    console.log(this.receiveBookList);

  }


  onclick(book: any) {
    this.dataService.SendBookDetails(book)
    this.route.navigateByUrl('Book')
  }

  
  lowtohigh(){
    this.receiveBookList= this.receiveBookList.sort((low:any,high:any)=> low.discountPrice-high.discountPrice);
    }
  hightolow(){
    this.receiveBookList= this.receiveBookList.sort((low:any,high:any)=> high.discountPrice-low.discountPrice);
  }
  newestarrivals(){
    this.receiveBookList.reverse();
  } 


}
