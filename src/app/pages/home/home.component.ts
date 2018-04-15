import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../pages/service/home.service';

interface UserInfo {
  data: object;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})


export class HomeComponent implements OnInit {

  avatar: String = "assets/images/avatar.png";
  // 博主的基本信息
  userInfo: any;
  arrays = [];
  panels = [
    {
      active: true,
      disabled: false,
      name: 'JavaScript',
      childPanel: [
        {
          active: true,
          name: 'NodeJs'
        },
        {
          active: false,
          name: 'Vue'
        }
      ]
    },
    {
      active: false,
      disabled: true,
      name: 'Java'
    },
    {
      active: false,
      disabled: false,
      name: 'Python'
    },
    {
      active: false,
      disabled: false,
      name: 'C#'
    },
    {
      active: false,
      disabled: false,
      name: 'Angular4+'
    }
  ];
  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this.getHomeInfos()
    this.avatar = "assets/images/avatar.png";'assets/images/banner.jpg'
    this.arrays = ['assets/images/banner.jpg', 'assets/images/banner.jpg', 'assets/images/banner.jpg', 'assets/images/banner.jpg', 'assets/images/banner.jpg', 'assets/images/banner.jpg', 'assets/images/banner.jpg', 'assets/images/banner.jpg', 'assets/images/banner.jpg', 'assets/images/banner.jpg', 'assets/images/banner.jpg', 'assets/images/banner.jpg', 'assets/images/banner.jpg', 'assets/images/banner.jpg', 'assets/images/banner.jpg'];
  }

  getHomeInfos() {
    return this._homeService.getHomeInfos()
      .subscribe(
        (user: any) => {
          this.userInfo = user.data;
          console.log(user, '----')
        }
      )
  }

}
