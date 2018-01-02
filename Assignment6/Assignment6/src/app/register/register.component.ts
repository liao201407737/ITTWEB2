import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
  }
  createUser(username: string, name:string,password: string){
    this.user.register(username,name,password).then(()=> {
      this.router.navigate(['workout']);
    });
  }

}
