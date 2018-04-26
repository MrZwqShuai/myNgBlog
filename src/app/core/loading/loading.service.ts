import { Injectable, ComponentRef, ViewContainerRef, Injector, ComponentFactoryResolver } from '@angular/core';
import { LoadingComponent } from './loading.component';

@Injectable()
export class LoadingService {
  public loadViewContainerRef: ViewContainerRef;
  private componentRef: ComponentRef<LoadingComponent>;
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector) {
  }

  show(): void {
    console.log(this.loadViewContainerRef, '---')
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(LoadingComponent);
    this.componentRef = this.loadViewContainerRef.createComponent(componentFactory, this.loadViewContainerRef.length, this.injector);
    this.componentRef.instance.show();
    console.log(this.componentRef.instance.show, 'this.componentRef.instance.show');
  }

  hide(): void {
    this.componentRef.destroy();
  }

}