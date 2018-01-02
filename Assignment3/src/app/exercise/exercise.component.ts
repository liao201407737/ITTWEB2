import { Component, Input } from '@angular/core';
import { Workout } from '../workout';
import { WorkoutService } from '../workout.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.exercise.component';

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
  sets: number
  @Input() workout: Workout;  
  dialogRef: MatDialogRef<DialogComponent>;
  constructor(private workoutService: WorkoutService, public dialog: MatDialog){
  }
  func(){
    console.log('hey');
  }
  openAddExerciseDialog(){
    this.dialogRef = this.dialog.open(DialogComponent,{
      height: '400pt',
      width: '600px',
      data:{name: this.name, description: this.description, reps:this.reps, sets:this.sets}
    });
    
    this.dialogRef.afterClosed().subscribe( res=> {
      this.workoutService.addExercise(
        this.workout._id,
        res.name,
        res.description,
        res.reps,
        res.sets
      );
    });
    
  }
}