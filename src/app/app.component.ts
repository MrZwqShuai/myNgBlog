import { Component } from '@angular/core';
import { HomeService } from './pages/service/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  openAction: Boolean = false;

  constructor(public _homeService: HomeService) {

  }
  // 打开菜单
  tapMenu() {
    this.openAction = this.openAction ? false : true;
    this._homeService.setShowPhoneSearchBtn(false);
  }
}
