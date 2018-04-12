import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  openAction: Boolean = false;

  // 打开菜单
  tapMenu() {
    this.openAction = this.openAction ? false : true;
  }
}
