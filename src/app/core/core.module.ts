import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingModule } from './loading';


@NgModule({
  imports: [
    CommonModule,
    LoadingModule
  ],
  declarations: [],
  exports: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModle: CoreModule) {
    if(parentModle) {
      throw new Error('coremodule 已经加载...');
    }
  }
 }
