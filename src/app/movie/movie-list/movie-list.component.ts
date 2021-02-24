import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies$ = new Observable<Movie[]>();// observable of our movies list
  constructor(private movieService : MovieService) //inject our movie service
   { }

  ngOnInit(): void {
    this.movies$ = this.movieService.getMovies();
  }

}
