import { Component, Input, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
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
 quantity:any
 price: any;
 pageSize=12;
 page:number=1;
  constructor(private route: Router, private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.receiveBookList);

  }


  onclick(book: any){
  this.dataService.SendBookDetails(book)
  this.route.navigateByUrl('Book')
}}
