import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core';

import { HomeService } from './blog-app/service/home.service';
import { SpeacialColumnServiceService } from './blog-app/service/speacial-column.service';
import { DetailService } from './blog-app/service/detail.service';
import { CommonService } from './blog-app/service/common.service';
import { AuthService } from './http-interceptors/auth.service'

import { AppComponent } from './app.component';
import { HomeComponent } from './blog-app/home/home.component';
import { FormsModule } from '@angular/forms';
import { TopMenuComponent } from './blog-app/top-menu/top-menu.component';
import { PortfolioComponent } from './blog-app/portfolio/portfolio.component';
import { AboutComponent } from './blog-app/about/about.component';
import { DetailComponent } from './blog-app/detail/detail.component';
import { MyvideoComponent } from './blog-app/home/myvideo/myvideo.component';
import { SpeacialColumnComponent } from './blog-app/speacial-column/speacial-column.component';
import { ColumnLeftComponent } from './blog-app/speacial-column/column-left/column-left.component';
import { ColumnRightComponent } from './blog-app/speacial-column/column-right/column-right.component';
import { AnimationWaveComponent } from './blog-app/animation/animation-wave/animation-wave.component';

import { StringSlicePipe } from './blog-app/pipe/stringPipe';
import { SearchPipe } from './blog-app/pipe/search.pipe';

import { ROUTE_CONFIG } from './app.routes';
import { TagComponent } from './blog-app/tag/tag.component';
import { TagLeftComponent } from './blog-app/tag/tag-left/tag-left.component';
import { TagRightComponent } from './blog-app/tag/tag-right/tag-right.component';
import { EditorComponent } from './blog-app/editor/editor.component';
import { SearchComponent } from './blog-app/search/search.component';
import { NgSwiperComponent } from './blog-app/ng-swiper/ng-swiper.component';



import { httpInterceptorProviders } from './http-interceptors/index';
import { VideoColumnComponent } from './blog-app/video-column/video-column.component';
import { NgVideoComponent } from './blog-app/ng-video/ng-video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    PortfolioComponent,
    AboutComponent,
    DetailComponent,
    MyvideoComponent,
    SpeacialColumnComponent,
    ColumnLeftComponent,
    ColumnRightComponent,
    AnimationWaveComponent,
    StringSlicePipe,
    SearchPipe,
    TagComponent,
    TagLeftComponent,
    TagRightComponent,
    EditorComponent,
    SearchComponent,
    NgSwiperComponent,
    VideoColumnComponent,
    NgVideoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    CoreModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTE_CONFIG, { useHash: true })
  ],
  providers: [HomeService, SpeacialColumnServiceService, AuthService, DetailService, CommonService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
