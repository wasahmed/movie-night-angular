import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { movies } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(){
    return of(movies); //Gives us a list of movies as an observable
  }
}
