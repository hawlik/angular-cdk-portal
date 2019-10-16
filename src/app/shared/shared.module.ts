import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { PortalModule } from '@angular/cdk/portal';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModuleToolbarComponent } from './module-toolbar/module-toolbar.component';

const exportedModules = [
  LayoutModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  FlexLayoutModule,
  RouterModule,
  PortalModule,
];

@NgModule({
  imports: [CommonModule, ...exportedModules],
  declarations: [
    ShellComponent,
    ModuleToolbarComponent,
    ModuleToolbarComponent,
  ],
  exports: [ShellComponent, ModuleToolbarComponent, ...exportedModules],
})
export class SharedModule {}
