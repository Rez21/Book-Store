import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  SignUpForm!: FormGroup;
  submitted = false;
  showPwd: boolean = false;
  visible=false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.SignUpForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.SignUpForm.controls;
  }

  OnCheck() {
    this.showPwd = !this.showPwd;
    this.visible=!this.visible;
  }

}
