import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { TopMenuComponent } from './pages/top-menu/top-menu.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { DetailComponent } from './pages/about/detail/detail.component';
import { MyvideoComponent } from './pages/home/myvideo/myvideo.component';
import { SpeacialColumnComponent } from './pages/speacial-column/speacial-column.component';
import { ColumnLeftComponent } from './pages/speacial-column/column-left/column-left.component';
import { ColumnRightComponent } from './pages/speacial-column/column-right/column-right.component';
import { AnimationWaveComponent } from './pages/animation/animation-wave/animation-wave.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot([{
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    },{
      path: 'home',
      component: HomeComponent
    }, {
      path: 'article',
      component: SpeacialColumnComponent
    }, {
      path: 'about',
      component: AboutComponent
    }, {
      path: 'about/:id',
      component: DetailComponent
    }], { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
