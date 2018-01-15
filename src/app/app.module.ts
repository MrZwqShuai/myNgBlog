import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgZorroAntdModule } from 'ng-zorro-antd';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { TopMenuComponent } from './pages/top-menu/top-menu.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { DetailComponent } from './pages/about/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    PortfolioComponent,
    AboutComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot([{
      path: 'home',
      component: HomeComponent
    }, {
      path: 'portfolio',
      component: PortfolioComponent
    }, {
      path: 'about',
      component: AboutComponent,
      children: [{
        path: 'detail/:id',
        component: DetailComponent
      }]
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
