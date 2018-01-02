import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Workout} from './workout';
import {Exercise} from './exercise';
@Injectable()
export class WorkoutService {
    private url = 'https://arcane-brook-14132.herokuapp.com/api';
    //private url = 'http://localhost:3000/api';
    private headers = new Headers({'Content-type': 'application/json'});
    
    constructor(private http: Http) {}

    get(): Promise<Workout[]> {
        
        return this.http.get(this.url +"/workout")
            .toPromise()
            .then(response => response.json() as Workout)
            .catch(this.handleError);
    };
    
    create(name: string): Promise<Workout> {
        return this.http
            .post(this.url +"/workout" , JSON.stringify({ name:name }),{headers: this.headers})
          .toPromise()
          .then(res => res.json() as Workout)
          .catch(this.handleError);
    };
      
    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    };

    addExercise(refId:string, name: string, description:string, reps:number, sets:number): Promise<Exercise> {
        return this.http
        .post(this.url +"/exercise" , JSON.stringify({ name:name, refId:refId, description:description,reps:reps, sets:sets }),{headers: this.headers})
        .toPromise()
        .then(res => res.json as any)
        .catch(this.handleError)
          ;
      };
    
}