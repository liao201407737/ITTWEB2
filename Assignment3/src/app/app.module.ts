import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutService } from './workout.service';

import { AppRoutingModule } from './app-routing.module';
import { ExerciseComponent } from './exercise/exercise.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { MatButtonModule } from "@angular/material";
import { MatFormFieldModule} from "@angular/material";
import { DialogComponent } from "../app/dialog/dialog.exercise.component";
@NgModule({
  declarations: [
    AppComponent,
    WorkoutComponent,
    ExerciseComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    MatDialogModule
  ],
  entryComponents:[DialogComponent],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
