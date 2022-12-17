import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-admin-login-form',
  templateUrl: './admin-login-form.component.html',
  styleUrls: ['./admin-login-form.component.scss']
})
export class AdminLoginFormComponent implements OnInit {
  submitted = false;
  showPwd: boolean = false;
  visible=false;
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private user: UserService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  OnCheck() {
    this.showPwd = !this.showPwd;
    this.visible=!this.visible;
  }

  onSubmit(){
    this.submitted = true;

    if(this.loginForm.valid){
      console.log("User logged in")
      let payload = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.user.adminLogin(payload).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem('adminToken', response.result.accessToken);

        // this.router.navigateByUrl('/AdminHome/admin-books')
      })
      
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
  }


}
