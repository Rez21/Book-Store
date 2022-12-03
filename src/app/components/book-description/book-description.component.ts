import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.scss']
})
export class BookDescriptionComponent implements OnInit {
  
  constructor(private dataService : DataService,private router:Router) { }
  book: any;
  ngOnInit(): void {
    this.dataService.getBookDetails.subscribe((response:any)=>{
      this.book = response;
    })
  }
  returnToDash(){
    this.router.navigateByUrl('/dashboard')
  }
}
