import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/bookService/book-service.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  BookList=[]
  constructor(private book:BookServiceService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(){
    this.book.getAllBooks().subscribe((response: any)=>{
      console.log(response)
      this.BookList = response.result;
      console.log(this.BookList);
    })
  }
}
