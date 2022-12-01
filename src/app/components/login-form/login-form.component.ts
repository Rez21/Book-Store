import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  showPwd: boolean = false;
  visible=false;
  constructor(private formBuilder: FormBuilder,private user: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
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
      this.user.login(payload).subscribe((response: any) => {
        console.log(response);
        
      })
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
  }
  
}
