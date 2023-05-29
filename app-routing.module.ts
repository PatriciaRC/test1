import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path:'movies/:id', component: MoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
