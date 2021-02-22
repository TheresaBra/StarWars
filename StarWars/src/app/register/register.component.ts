import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  user = {
    username: '',
    password: '',
    firstName: '',
    email: '',
    lastName: '',
  };
  constructor() { 
    console.log('constructor.....');
    this.user;
  }
    
  ngOnInit(): void {
  }

  onSubmit(theForm: NgForm) {
    this.user.username = theForm.value.username;
    this.user.password = theForm.value.password;
    this.user.firstName = theForm.value.firstName;
    this.user.lastName = theForm.value.lastName;
    this.user.email = theForm.value.email;

    console.log(this.user);

  }

}
