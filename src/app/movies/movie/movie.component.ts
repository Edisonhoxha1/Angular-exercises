import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { Movie } from '../movies.component';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie', 
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, AfterViewInit, OnChanges {

  
@Input() moviechild: Movie = {};
@Output() sendClickChild = new EventEmitter<Movie>()
@ViewChild('director') director: any;


movieFromService: Movie = {};

  constructor(private movieService:MoviesService) { }


  ngOnInit(): void {
    // console.log(this.moviechild);
    this.getMovieFromService();

  }

  ngAfterViewInit() {
    // console.log(this.director);
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
  }

  clickChild(){
    this.sendClickChild.emit(this.moviechild);
  }


  getMovieFromService(){
    this.movieFromService = this.movieService.getmovie();
    // console.log(this.movieFromService);
  }


}
