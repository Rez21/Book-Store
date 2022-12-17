import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/services/bookService/book-service.service';
import { DataService } from 'src/app/services/dataService/data.service';
import { UpdateBookComponent } from '../update-book/update-book.component';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.scss']
})
export class AdminBooksComponent implements OnInit {
  @Input() recieveAdminBookList: any;
  BookList=[]
  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity:any
  price: any;
  id: any;
  Search='';
  totalLength:any;
  page:number=1;
  constructor(public dialog:MatDialog,private router:Router,private book:BookServiceService,private dataService:DataService) { }

  displayedColumns: string[] = ['Image','BookName','Author','description','BookPrice','Descount','Quantiy','approve-btn'];

  ngOnInit(): void {
    this.dataService.getBookDetails.subscribe((res: any) => {
      console.log(res)
      this.Search = res;
      this.totalLength = res.length;
    })
    console.log(this.recieveAdminBookList)
  }


  updateDialog(note:any){
    const dialogRef=this.dialog.open(UpdateBookComponent,{
      width:'40%',
      height:'auto',
      data:note,

    });
    dialogRef.afterClosed().subscribe(reponse=>{
      
      this.bookName;
      this.author;
      this.description;
      this.quantity;
      this.price;
      this.discountPrice;
      console.log('The dialog was closed',reponse);
    })
  }


  deleteItem(Book:any) {

    console.log(Book)
    this.book.deleteBook(Book).subscribe((res: any) => {
      console.log(res)
    })
  }












  lowtohigh(){
    this.recieveAdminBookList= this.recieveAdminBookList.sort((low:any,high:any)=> low.discountPrice-high.discountPrice);//low and high as argument pass in this sort the book from price 
    }
  hightolow(){
    this.recieveAdminBookList= this.recieveAdminBookList.sort((low:any,high:any)=> high.discountPrice-low.discountPrice);
  }
  newestarrivals(){
    this.recieveAdminBookList.reverse();
  }
}
