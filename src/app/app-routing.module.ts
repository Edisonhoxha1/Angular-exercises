import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseTestComponent } from './exercise-test/exercise-test.component';
import {HomeComponent} from "./home/home.component";
import {IncrementBtnComponent} from "./increment-btn/increment-btn.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "exercise", component: ExerciseTestComponent },
  { path: 'increment', component: IncrementBtnComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
