import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksRankingComponent } from './books-ranking/books-ranking.component';

const routes: Routes = [
  {
    path: 'list',
    component: BooksListComponent,
  },
  {
    path: 'ranking',
    component: BooksRankingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
