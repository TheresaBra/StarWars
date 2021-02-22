import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  exists!:boolean;
  user = {
    username: '',
    password: ''
  };

  constructor(private router:Router) { 
    console.log('constructor.....');
    this.getUserStatus();
  }
 
  getUserStatus() {
    this.exists = true;
    console.log("exists" + this.exists);
  }

  onSubmit(theForm: NgForm) {
    this.user.username = theForm.value.username;
    this.user.password = theForm.value.password;
     if (this.exists){
      this.router.navigateByUrl("/logged-in"); 
     }

    // this..navigate(["members"])

    console.log(this.user);

  }

}
