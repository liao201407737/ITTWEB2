import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { WorkoutComponent }      from './workout/workout.component';
import { ExerciseComponent }  from './exercise/exercise.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './auth.guard';
export const routes: Routes = [
  { path: 'workout', 
    component: WorkoutComponent 
  },
  { path: 'login',
   component: LoginComponent
  },
  { path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: '/workout',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
