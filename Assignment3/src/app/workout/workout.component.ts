import { Component } from '@angular/core';
import { Workout } from '../workout';
import { WorkoutService} from '../workout.service';
import { OnInit } from '@angular/core';
@Component({
  templateUrl: './workout.component.html',
  styleUrls: ['../app.component.css']
})
export class WorkoutComponent implements OnInit {
  workouts: Workout[];
  selectedWorkout: Workout;
  
  ngOnInit(): void {
   this.workoutService.get().then(res => {
      this.workouts = res;
    });;
  }
//  ngOnInit(): void {
 //   this.workoutService.get().then(() => this.workouts);;
  // }
  title = 'Workout';
  constructor(private workoutService: WorkoutService){}

  onSelect(workout: Workout): void {
    this.selectedWorkout = workout;
  }
  
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.workoutService.create(name)
      .then(x => {
        this.workouts.push(x);
        this.selectedWorkout = null;
      });
    this.func();
  }
  func():void{
    window.location.reload();
  }
}

