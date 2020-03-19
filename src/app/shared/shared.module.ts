import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
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
