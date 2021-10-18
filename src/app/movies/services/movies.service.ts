import { Injectable } from '@angular/core';
import { Movie } from '../movies.component';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getmovie(): Movie {
    const movie: Movie = {
      title:'Warcraft',
      director:'Duncan Jones',
      cast:'Travis Fimmel, Robert Kazinsky, Ben Foster',
      releaseDate:'June 10, 2016', 
      reviews: 0
    }
      return movie;
    }
}
