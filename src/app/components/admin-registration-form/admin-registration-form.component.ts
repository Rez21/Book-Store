import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-admin-registration-form',
  templateUrl: './admin-registration-form.component.html',
  styleUrls: ['./admin-registration-form.component.scss']
})
export class AdminRegistrationFormComponent implements OnInit {

  SignUpForm!: FormGroup;
  submitted = false;
  showPwd: boolean = false;
  visible=false;
  constructor(private formBuilder: FormBuilder,private user: UserService) { }

  ngOnInit(): void {
    this.SignUpForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
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

  onSubmit(){
    this.submitted = true;

    if(this.SignUpForm.valid){
      console.log("Registration Successful");
      let payload = {
        fullName: this.SignUpForm.value.fullName,
        email: this.SignUpForm.value.email,
        password: this.SignUpForm.value.password,
        mobile: this.SignUpForm.value.mobile
      }
      this.user.adminSignUp(payload).subscribe((response: any) => {
        console.log(response);
        
      })
    }
  }

}
