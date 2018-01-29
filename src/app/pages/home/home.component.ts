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

  avatar: String = "../../../assets/avatar.png";
  // 博主的基本信息
  userInfo: any;
  array = [];
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
    this.avatar = "../../../assets/avatar.png";
    this.array = ['../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg'];
    this.arrays = ['../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg'];
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
