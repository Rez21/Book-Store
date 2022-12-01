import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit {
 @Input() receiveBookList: any;


 bookName: any;
 author: any;
 quantity:any
 price: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.receiveBookList);
  }

}
