import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SpeacialColumnComponent } from './pages/speacial-column/speacial-column.component';
import { AboutComponent } from './pages/about/about.component';
import { DetailComponent } from './pages/detail/detail.component';

export const ROUTE_CONFIG = [{
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
  path: 'article/p',
  component: DetailComponent
}]