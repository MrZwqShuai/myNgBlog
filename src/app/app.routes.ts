import { RouterModule } from '@angular/router';

import { HomeComponent } from './first-screen/home/home.component';
import { SpeacialColumnComponent } from './blog-app/speacial-column/speacial-column.component';
import { AboutComponent } from './blog-app/about/about.component';
import { DetailComponent } from './blog-app/detail/detail.component';
import { TagComponent } from './blog-app/tag/tag.component';
import { EditorComponent } from './blog-app/editor/editor.component';
import { SearchComponent } from './blog-app/search/search.component';
import { VideoColumnComponent } from './blog-app/video-column/video-column.component';

export const ROUTE_CONFIG = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},{
  path: 'home',
  loadChildren: 'app/first-screen/first-screen.module#FirstScreenModule'
}, {
  path: '',
  loadChildren: 'app/blog-app/blog-app.module#BlogAppModule'
}]