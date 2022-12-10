import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private dataService : DataService,private router:Router,private cart: CartService) { }

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

  addressDetails(book: any){
    this.isClicked= true;
    this.isContinued=true;
    
  }
}
