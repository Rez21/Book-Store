import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/services/bookService/book-service.service';
import { CartService } from 'src/app/services/cartService/cart.service';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {
  isClicked=false;
  userAddress:any=[];
  isClickedHome=false;
  isContinued=false;
  isCheckout=false;
  cartBook: any=[]
  Book: any
  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity: any
  price: any;
  _id: any;
  length: any;
  fullName: any
  isShow = false;
  address = true;
  placeorder = true;
  cont = true;
  summary = true;
  Books: any
  item_qty = 1;
  constructor(private dataService : DataService,private router:Router,private cart: CartService, private book: BookServiceService) { }

  ngOnInit(): void {
    this.getCartBooks();
    
  }
  getCartBooks(){
   this.cart.cartItems().subscribe((res:any)=>{
    this.cartBook = res.result;
    console.log(this.cartBook)
    localStorage.setItem('cartItem', res.result.length)
   })
  }
  returnToHome(){
    this.router.navigateByUrl('/dashboard')
  }

  deletCartItem(cartItemId_id:any){
    console.log(cartItemId_id)
    this.cart.deleteItem(cartItemId_id).subscribe((res: any)=>{
     console.log(res);
    })
  }

  // addressDetails(book: any){
  //   this.isClicked= true;
  //   this.isContinued=true;
    
  // }
  addressBar() {
    this.address = false
    this.placeorder = false
  }
  continueBar() {
    this.summary = false
    this.cont = false
  }

  placeOrder() {
    let orders: Array<any> = []
    for (this.Books of this.cartBook) {
      let Book = {
        product_id: this.Books.product_id._id,
        product_name: this.Books.product_id.bookName,
        product_quantity: this.Books.product_id.quantity,
        product_price: this.Books.product_id.price,
      }
      orders.push(Book)
    }
    let payload = {
      orders: orders
    }
    console.log(payload)
    this.book.order(payload).subscribe((res: any) => {
      console.log(res)
      this.router.navigateByUrl('order');
    })
  }

  increase(cartitem: any) {
    this.item_qty = cartitem.quantityToBuy;
    this.item_qty += 1;
    console.log("increased",this.item_qty);
    this.updateCount(cartitem);
  }
  decrease(cartitem: any) {
    this.item_qty =cartitem.quantityToBuy;
    if (this.item_qty > 0) {
      this.item_qty -= 1;
      console.log( "decrease", this.item_qty);
      this.updateCount(cartitem);
    }

  }
  updateCount(cartitem:any){
    let payload={
      quantityToBuy: this.item_qty
    }
    this.book.quantity(cartitem._id,payload).subscribe((res:any)=>{
      console.log(res)
    })
  }
}
