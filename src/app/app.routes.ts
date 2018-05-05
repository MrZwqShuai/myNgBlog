import { RouterModule } from '@angular/router';


export const ROUTE_CONFIG = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/home/home'
},{
  path: 'home',
  loadChildren: 'app/first-screen/first-screen.module#FirstScreenModule'
}, {
  path: '',
  loadChildren: 'app/blog-app/blog-app.module#BlogAppModule'
}]