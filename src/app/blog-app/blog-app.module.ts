import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BlogAppComponent } from './blog-app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { SpeacialColumnComponent } from './speacial-column/speacial-column.component';
import { ColumnLeftComponent } from './speacial-column/column-left/column-left.component';
import { ColumnRightComponent } from './speacial-column/column-right/column-right.component';
import { AnimationWaveComponent } from './animation/animation-wave/animation-wave.component';
import { TagComponent } from './tag/tag.component';
import { TagLeftComponent } from './tag/tag-left/tag-left.component';
import { TagRightComponent } from './tag/tag-right/tag-right.component';
import { EditorComponent } from './editor/editor.component';
import { SearchComponent } from './search/search.component';
import { VideoColumnComponent } from './video-column/video-column.component';
import { NgVideoComponent } from './ng-video/ng-video.component';
import { GoTopComponent } from './go-top/go-top.component';

import { HomeService } from '../blog-app/service/home.service';

import { StringSlicePipe, ChinesePipe } from './pipe/stringPipe';

import { ROUTER_CONFIG } from './blog-app.route';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
  declarations: [
    StringSlicePipe,
    ChinesePipe,
    BlogAppComponent,
    AboutComponent,
    DetailComponent,
    SpeacialColumnComponent,
    ColumnLeftComponent,
    ColumnRightComponent,
    AnimationWaveComponent,
    TagComponent,
    TagLeftComponent,
    TagRightComponent,
    EditorComponent,
    SearchComponent,
    VideoColumnComponent,
    NgVideoComponent,
    GoTopComponent,
  ],
  providers: [
    HomeService
  ]
})
export class BlogAppModule { }
