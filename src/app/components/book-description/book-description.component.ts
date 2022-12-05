import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cartService/cart.service';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.scss']
})
export class BookDescriptionComponent implements OnInit {
  
  constructor(private dataService : DataService,private router:Router,private cart: CartService) { }
  book: any;
  BookID: any;
  product_id: any;
  ngOnInit(): void {
    this.dataService.getBookDetails.subscribe((response:any)=>{
      this.book = response;
    })
  }
  returnToDash(){
    this.router.navigateByUrl('/dashboard')
  }

  addToBag(){
    let payload={
      product_id: this.book._id
    }
    console.log(payload)
    this.cart.addToCart(payload).subscribe((res: any)=>{
      console.log(res);
    })
  }
}
