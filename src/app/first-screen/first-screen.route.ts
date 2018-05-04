import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FirstScreenComponent } from './first-screen.component';

export const ROUTER_CONFIG: Routes = [
  {
    path: '', component: FirstScreenComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
    ]
  }
];