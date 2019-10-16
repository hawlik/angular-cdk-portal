import { Component } from '@angular/core';

@Component({
  selector: 'app-books-module-toolbar',
  template: `
    <app-module-toolbar>
      <button mat-mini-fab color="warn">
        <mat-icon>book</mat-icon>
      </button>
      <button mat-mini-fab color="warn">
        <mat-icon>create</mat-icon>
      </button>
      <button mat-mini-fab color="warn">
        <mat-icon>speed</mat-icon>
      </button>
      <button mat-raised-button color="accent">
        Books Action 2
      </button>
    </app-module-toolbar>
  `,
  styles: ['.mat-button-base { margin-right: 8px; }']
})
export class BooksModuleToolbarComponent {}
