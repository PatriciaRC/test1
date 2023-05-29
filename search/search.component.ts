import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  
  styleUrls: ['./search.component.css'],
  template: `
    <input [(ngModel)]="searchTerm" placeholder="Search movies" />
    <button (click)="search()">Search</button>

    <div *ngIf="movieList">
      <h2>Search Results:</h2>
      <ul>
        <li *ngFor="let movie of movieList">{{ movie.title }}</li>
      </ul>
    </div>
  `

})
export class SearchComponent {

  searchTerm: string;
  movieList: any[];

  constructor(private moviesService: MoviesService) { }

  search(): void {
    this.moviesService.searchMovies(this.searchTerm).subscribe(
      (response) => {
        this.movieList = response.results;
      },
      (error) => {
        console.log('An error occurred:', error);
      }
    );
  }
}
