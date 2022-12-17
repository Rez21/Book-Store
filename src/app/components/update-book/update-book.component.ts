import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/services/bookService/book-service.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  UpdateForm!: FormGroup
  submitted = false
  book: any;
  bookName: any
  author: any
  description: any
  quantity: any
  price: any
  discountPrice: any
  bookid: any;
  constructor(private bookService:BookServiceService,private router: Router,  private formBuilder: FormBuilder,public dialogRef: MatDialogRef<UpdateBookComponent>, @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.bookName = data.bookName
    this.author = data.author
    this.description = data.description
    this.quantity = data.quantity
    this.price = data.price
    this.discountPrice = data.discountPrice
    this.bookid = data._id
    console.log(data);
   }
   onNoClick(){
    this.dialogRef.close();
   }
  ngOnInit(): void {
    this.book = this.data.element;
  }

  updateBook() {
    this.submitted = true
    let reqData = {
      bookName: this.bookName,
      author: this.author,
      description: this.description,
      quantity: this.quantity,
      price: this.price,
      discountPrice: this.discountPrice,
    }

    this.bookService.UpdateBook(this.bookid,reqData).subscribe((result: any) => {
      console.log(result);
      
    })
    this.dialogRef.close()
  } 

}
