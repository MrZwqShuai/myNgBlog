import { Routes } from '@angular/router';

import { BlogAppComponent } from './blog-app.component';
import { SpeacialColumnComponent } from './speacial-column/speacial-column.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { TagComponent } from './tag/tag.component';
import { EditorComponent } from './editor/editor.component';
import { SearchComponent } from './search/search.component';
import { VideoColumnComponent } from './video-column/video-column.component' ;

export const ROUTER_CONFIG: Routes = [
  {
    path: '', component: BlogAppComponent,
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: '/article'
      }, {
        path: 'article',
        component: SpeacialColumnComponent
      }, {
        path: 'about',
        component: AboutComponent
      }, {
        path: 'article/p',
        component: DetailComponent
      }, {
        path: 't',
        component: TagComponent
      }, {
        path: 'editor',
        component: EditorComponent
      }, {
        path: 'article/search',
        component: SearchComponent
      }, {
        path: 'video',
        component: VideoColumnComponent
      }
    ]
  }
]