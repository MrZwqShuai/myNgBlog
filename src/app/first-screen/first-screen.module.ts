import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FirstScreenComponent } from './first-screen.component';
import { HomeComponent } from './home/home.component';
import { MyvideoComponent } from './home/myvideo/myvideo.component';
import { NgSwiperComponent } from './ng-swiper/ng-swiper.component';

import { HomeService } from '../blog-app/service/home.service';

import { ROUTER_CONFIG } from './first-screen.route';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
  declarations: [
    FirstScreenComponent,
    HomeComponent,
    MyvideoComponent,
    NgSwiperComponent
  ],
  providers: [
    HomeService
  ]
})
export class FirstScreenModule { }
