import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  Injector,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CdkPortal, DomPortalOutlet, PortalOutlet } from '@angular/cdk/portal';

@Component({
  selector: 'app-module-toolbar',
  template: `
    <ng-template cdkPortal>
      <ng-content></ng-content>
    </ng-template>
  `,
  styleUrls: ['module-toolbar.component.css'],
})
export class ModuleToolbarComponent implements AfterViewInit, OnDestroy {
  private portalHost: PortalOutlet;
  @ViewChild(CdkPortal) portal;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  ngAfterViewInit(): void {
    this.portalHost = new DomPortalOutlet(
      document.querySelector('#module-toolbar-container'),
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );

    this.portalHost.attach(this.portal);
  }

  ngOnDestroy(): void {
    this.portalHost.detach();
  }
}
