import { Component,Input } from '@angular/core';
import{UserService} from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment 3';
  lol = 'false';
  isUserLoggedIn : boolean;
  constructor(private userService: UserService){
    this.userService.isUserLoggedIn.subscribe(value=> this.isUserLoggedIn = value);
  }
  public logOut(){
    this.userService.logOff();
  }
  public isLoggedIn() :boolean{
    return this.isUserLoggedIn;
  }
}

