import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Catalog, Movie, MoviesService } from 'src/app/services/movies.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  catalog: Movie[];
  constructor(
    private moviesService: MoviesService,
  ) { }

  ngOnInit() {
    this.moviesService.getCatalog().pipe(take(1)).subscribe(res =>{
      this.catalog = res.results;
      console.log("this catalog dentro del observable", this.catalog);
    });
  }
}
