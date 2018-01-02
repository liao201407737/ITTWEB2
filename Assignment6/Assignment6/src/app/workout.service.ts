import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Workout} from './workout';
import {Exercise} from './exercise';
import {UserService} from './user.service';
import { Subject,BehaviorSubject } from 'rxjs';

@Injectable()
export class WorkoutService {
    //private url = 'https://arcane-brook-14132.herokuapp.com/api';
    private url = "/api";
    private headers = new Headers({'Content-type': 'application/json'});
    private postheaders;
    private selectedDataValue: Workout;
    data  = new BehaviorSubject<Workout[]>([])
    selectedData  = new BehaviorSubject<Workout>(null);
    
    public event = new Subject<Boolean>();
    constructor(private http: Http, private user:UserService) {
        this.reload();
        var tmp = 'bearer' + this.user.getToken();
        this.selectedDataValue = new Workout();
        this.postheaders = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' +this.user.getToken()});
    }

    reload(){
        this.get().then(res => this.data.next(res));
    }
    get(): Promise<Workout[]> {
        
        return this.http.get(this.url +"/workout")
            .toPromise()
            .then(response => 
                response.json() as Workout)
            .catch(this.handleError);
    };
    
    create(name: string): Promise<Workout> {
        return this.http
            .post(this.url +"/workout" , JSON.stringify({ name:name }),{headers: this.postheaders})
          .toPromise()
          .then(res => res.json() as Workout)
          .catch(this.handleError);
    };
    setWorkout(workout:Workout){
        this.selectedData.next(workout);
    } 
    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    };

    addExercise(refId:string, name: string, description:string, reps:number, sets:number): Promise<Exercise> {

        return this.http
        .post(this.url +"/exercise" , JSON.stringify({ name:name, refId:refId, description:description,reps:reps, sets:sets }),{headers: this.postheaders})
        .toPromise()
        .then(res => {
            res.json as any;
        })
        .catch(this.handleError);
      };
    
}
