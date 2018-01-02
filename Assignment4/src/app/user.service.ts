import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {User} from './user';
import {Token} from './token'
import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class UserService {
    private url = 'https://arcane-brook-14132.herokuapp.com/api';
    private headers = new Headers({'Content-type': 'application/json'});
    public isUserLoggedIn = new BehaviorSubject<boolean>(false);
    private userName;
    constructor(private http: Http) {
    }
    checkIfUserloggedIn():boolean{
        if (window.localStorage['loc8r-token']) {
           return true;
        } 
        else {
            return false;
        }    
    }
    
    private saveToken(token: Token) {
        window.localStorage['loc8r-token'] = token.token;
        this.isUserLoggedIn.next(true);
    }
    private forgetsToken() {
        window.localStorage['loc8r-token'] = null;
        this.isUserLoggedIn.next(false);
    }
    getToken() {
        if (window.localStorage['loc8r-token']) {
            return window.localStorage['loc8r-token'];
        } 
        else {
            return '';
        }
    }

    logOff(){
        this.forgetsToken();
    }
    logIn(email:string, password:string): Promise<Token> {
        
        return this.http
        .post(this.url +"/login" , JSON.stringify({ email:email, password: password }),{headers: this.headers})
      .toPromise()
      .then( res=> this.saveToken(res.json() as Token))
      .catch(this.handleError);
    };

    register(email:string, name:string,password: string): Promise<Token>{
        return this.http
            .post(this.url+"/register",JSON.stringify({email:email,name:name,password:password}),{headers: this.headers})
        .toPromise()
          .then( res => this.saveToken(res.json() as Token))
        .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }; 

}