import { Component, OnInit } from '@angular/core';

export interface Movie {
  title?: string;
  director?: string;
  cast?: string;
  releaseDate?: string;
  reviews?: number;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  movies: Movie[] = [
    {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016', reviews: 4},
    {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016', reviews: 2},
    {title:'Captain American: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016', reviews: 5},
    {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016', reviews: 1},
    {title:'Warcraft',director:'Duncan Jones',cast:'Travis Fimmel, Robert Kazinsky, Ben Foster',releaseDate:'June 10, 2016', reviews: 0},
  ];

  movie: Movie = {
    title:'Zootopia',
    director:'Byron Howard, Rich Moore',
    cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',
    releaseDate:'March 4, 2016', 
    reviews: 4
  };


  kombesi: string[] = ['AL', 'KS', 'GR'];


  showText = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickButton() {
    this.showText = !this.showText;
  }

  getClickedChild(event: any) {
    console.log(event);
  }
}
