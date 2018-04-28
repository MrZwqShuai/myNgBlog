import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core';

import { HomeService } from './pages/service/home.service';
import { SpeacialColumnServiceService } from './pages/service/speacial-column.service';
import { DetailService } from './pages/service/detail.service';
import { CommonService } from './pages/service/common.service';
import { AuthService } from './http-interceptors/auth.service'

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { TopMenuComponent } from './pages/top-menu/top-menu.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { DetailComponent } from './pages/detail/detail.component';
import { MyvideoComponent } from './pages/home/myvideo/myvideo.component';
import { SpeacialColumnComponent } from './pages/speacial-column/speacial-column.component';
import { ColumnLeftComponent } from './pages/speacial-column/column-left/column-left.component';
import { ColumnRightComponent } from './pages/speacial-column/column-right/column-right.component';
import { AnimationWaveComponent } from './pages/animation/animation-wave/animation-wave.component';

import { StringSlicePipe } from './pages/pipe/stringPipe';
import { SearchPipe } from './pages/pipe/search.pipe';

import { ROUTE_CONFIG } from './app.routes';
import { TagComponent } from './pages/tag/tag.component';
import { TagLeftComponent } from './pages/tag/tag-left/tag-left.component';
import { TagRightComponent } from './pages/tag/tag-right/tag-right.component';
import { EditorComponent } from './pages/editor/editor.component';
import { SearchComponent } from './pages/search/search.component';
import { NgSwiperComponent } from './pages/ng-swiper/ng-swiper.component';



import { httpInterceptorProviders } from './http-interceptors/index';
import { VideoColumnComponent } from './pages/video-column/video-column.component';
import { NgVideoComponent } from './pages/ng-video/ng-video.component';

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
