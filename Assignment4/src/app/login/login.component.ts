import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
  }
  loginUser(username: string, password: string){
    this.user.logIn(username,password).then(()=>{
      this.router.navigate(['workout'])
    });
  }
  registerUser(){
    this.router.navigate(['register'])
  }
}
