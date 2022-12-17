import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/bookService/book-service.service';

@Component({
  selector: 'app-get-all-admin-books',
  templateUrl: './get-all-admin-books.component.html',
  styleUrls: ['./get-all-admin-books.component.scss']
})
export class GetAllAdminBooksComponent implements OnInit {

  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity:any
  price: any;
  id: any;
  BookList=[]
  constructor(private book:BookServiceService) { }

  ngOnInit(): void {
    this.getAllBook();
  }

  getAllBook(){
    this.book.getAllBooks().subscribe((res:any)=>{
      console.log(res);
      this.BookList=res.result;
      console.log(this.BookList);
      })
  }
}
