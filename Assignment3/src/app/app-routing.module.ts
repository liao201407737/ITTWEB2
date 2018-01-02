import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { WorkoutComponent }      from './workout/workout.component';
import { ExerciseComponent }  from './exercise/exercise.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/workout',
    pathMatch: 'full'
  },
  { path: 'workout', component: WorkoutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
