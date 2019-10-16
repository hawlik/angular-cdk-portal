import { Component } from '@angular/core';

@Component({
  selector: 'app-movies-module-toolbar',
  template: `
    <app-module-toolbar>
      <button mat-mini-fab>
        <mat-icon>movie</mat-icon>
      </button>
      <button mat-raised-button color="warn">
        Movies Action 2
      </button>
    </app-module-toolbar>
  `,
  styles: ['.mat-button-base { margin-right: 8px; }']
})
export class MoviesModuleToolbarComponent {}
