import { Component } from '@angular/core';
import { Workout } from '../workout';
import { WorkoutService} from '../workout.service';
import { SharedService} from '../sharred.service';
import { OnInit } from '@angular/core';
import {UserService} from '../user.service';
@Component({
  templateUrl: './workout.component.html',
  styleUrls: ['../app.component.css']
})
export class WorkoutComponent implements OnInit {
  workouts: Workout[];
  selectedWorkout: Workout;
  isUserLoggedIn : boolean;
  
  ngOnInit(): void {

    this.workoutService.data.subscribe(value => this.workouts = value);
  }

  title = 'Workout';
  constructor(private workoutService: WorkoutService,private sharedService: SharedService,private userService: UserService){
    this.workoutService.event.subscribe( () => {
    });
    this.userService.isUserLoggedIn.subscribe(value => this.isUserLoggedIn = value);
    this.workoutService.selectedData.subscribe(value => this.selectedWorkout = value);
  }

  isLoggedIn(){
    return this.isUserLoggedIn;
  }
  onSelect(workout: Workout): void {
    //this.selectedWorkout = workout;
    this.workoutService.selectedData.next(workout);
  }
  
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.workoutService.create(name)
      .then(x => {
        this.workoutService.reload();
        this.selectedWorkout = x;
      });
  }
}

