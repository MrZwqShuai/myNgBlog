import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { HomeService } from './pages/service/home.service';
import { SpeacialColumnServiceService } from './pages/service/speacial-column.service';
import { DetailService } from './pages/service/detail.service';

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

import { ROUTE_CONFIG } from './app.routes';

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
    StringSlicePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(ROUTE_CONFIG, { useHash: true })
  ],
  providers: [HomeService, SpeacialColumnServiceService, DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
