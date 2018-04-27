import { Injectable, ComponentRef, ViewContainerRef, Injector, ComponentFactoryResolver } from '@angular/core';
import { LoadingComponent } from './loading.component';

@Injectable()
export class LoadingService {
  public loadViewContainerRef: ViewContainerRef;
  private componentRef: ComponentRef<LoadingComponent>;
  private loaded: boolean = false;
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector) {
  }

  show(): void {
    if(!this.loaded){
      this.loaded = true;
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(LoadingComponent);
      this.componentRef = this.loadViewContainerRef.createComponent(componentFactory, this.loadViewContainerRef.length, this.injector);
      this.componentRef.instance.show();
      console.log(this.componentRef.instance.show, 'this.componentRef.instance.show');
    }
  }

  hide(): void {
    this.loaded = false;
    this.componentRef.destroy();
  }

}