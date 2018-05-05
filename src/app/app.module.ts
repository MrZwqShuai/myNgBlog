import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FirstScreenModule } from './first-screen/first-screen.module';

import { CoreModule } from './core';

import { HomeService } from './blog-app/service/home.service';
import { SpeacialColumnServiceService } from './blog-app/service/speacial-column.service';
import { DetailService } from './blog-app/service/detail.service';
import { CommonService } from './blog-app/service/common.service';
import { AuthService } from './http-interceptors/auth.service'

import { AppComponent } from './app.component';
import { PortfolioComponent } from './blog-app/portfolio/portfolio.component';
import { FormsModule } from '@angular/forms';
import { TopMenuComponent } from './blog-app/top-menu/top-menu.component';

import { SearchPipe } from './blog-app/pipe/search.pipe';

import { ROUTE_CONFIG } from './app.routes';


import { httpInterceptorProviders } from './http-interceptors/index';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    TopMenuComponent,
    SearchPipe,
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
