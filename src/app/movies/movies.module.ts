import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesRankingComponent } from './movies-ranking/movies-ranking.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesModuleToolbarComponent } from './components/movies-module-toolbar/movies-module-toolbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MoviesRankingComponent,
    MoviesListComponent,
    MoviesModuleToolbarComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule, SharedModule],
})
export class MoviesModule {}
