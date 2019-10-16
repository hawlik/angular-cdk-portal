import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesRankingComponent } from './movies-ranking/movies-ranking.component';

const routes: Routes = [
  {
    path: 'list',
    component: MoviesListComponent,
  },
  {
    path: 'ranking',
    component: MoviesRankingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
