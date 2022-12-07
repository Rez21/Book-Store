import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from 'src/app/services/wishlistService/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistBooks: any=[]
  constructor(private wishlist:WishlistService,private router:Router) { }

  ngOnInit(): void {
  }

  // getWishlistBooks(){
  //   this.wishlist.wishlistItems().subscribe((res: any)=>{
  //     this.wishlistBooks = res.result;
  //     console.log(this.wishlistBooks)
  //   })
  }


