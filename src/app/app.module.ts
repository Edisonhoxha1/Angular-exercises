import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers/customers.component';
import { UnderlineDirective } from './directives/underline.directive';
import { MoviesComponent } from './movies/movies.component';
import { DatePipe } from './date.pipe/date.pipe';
import { KombesiPipe } from './kombesi.pipe';
import { MovieComponent } from './movies/movie/movie.component';
import { FileSizePipe } from './fileSize/file-size.pipe';
import { ExerciseTestComponent } from './exercise-test/exercise-test.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonComponent } from './persons-list/person/person/person.component';
import { IncrementBtnComponent } from './increment-btn/increment-btn.component';
import { CounterComponent } from './increment-btn/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    HighlightDirective,
    HomeComponent,
    CustomersComponent,
    UnderlineDirective,
    MoviesComponent,
    DatePipe,
    KombesiPipe,
    MovieComponent,
    FileSizePipe,
    ExerciseTestComponent,
    PersonsListComponent,
    PersonComponent,
    IncrementBtnComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
