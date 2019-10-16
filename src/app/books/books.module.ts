import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksRankingComponent } from './books-ranking/books-ranking.component';
import { SharedModule } from '../shared/shared.module';
import { BooksModuleToolbarComponent } from './components/books-module-toolbar/books-module-toolbar.component';

@NgModule({
  declarations: [
    BooksListComponent,
    BooksRankingComponent,
    BooksModuleToolbarComponent,
  ],
  imports: [CommonModule, BooksRoutingModule, SharedModule],
})
export class BooksModule {}
