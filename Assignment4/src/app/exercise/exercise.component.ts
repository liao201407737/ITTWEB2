import { Component, Input } from '@angular/core';
import { Workout } from '../workout';
import { WorkoutService } from '../workout.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.exercise.component';
import { SharedService } from '../sharred.service';
import {UserService} from '../user.service';
import {Exercise} from '../exercise';

@Component({
  selector: 'workout-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['../app.component.css']
})
export class ExerciseComponent {
  title = 'My Exercise';
  name: string;
  description: string;
  reps: number;
  sets: number;
  tmp: boolean;
  @Input() workout: Workout;  
  dialogRef: MatDialogRef<DialogComponent>;
  constructor(private workoutService: WorkoutService, public dialog: MatDialog, private sharedService: SharedService,private userService: UserService){
      this.userService.isUserLoggedIn.subscribe(value=> this.isUserLoggedIn = value);
  }
  isUserLoggedIn;

  openAddExerciseDialog(){
    this.dialogRef = this.dialog.open(DialogComponent,{
      height: '400pt',
      width: '600px',
      data:{name: this.name, description: this.description, reps:this.reps, sets:this.sets}
    });
    
    this.dialogRef.afterClosed().subscribe( res => {
      this.workoutService.addExercise(
        this.workout._id,
        res.name,
        res.description,
        res.reps,
        res.sets
      );
      if(this.workout.exercises == null){
        this.workout.exercises = new Array<Exercise>();
      }
      var newExercise = new Exercise();
      newExercise.name = res.name;
      newExercise.description = res.description;
      newExercise.reps = res.reps;
      newExercise.sets = res.sets;
      this.workout.exercises.push(newExercise);
      this.workoutService.selectedData.next(this.workout);
    });
    
  }
}