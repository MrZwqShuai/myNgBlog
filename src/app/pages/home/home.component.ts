import { Component, OnInit } from '@angular/core';
// import { setTimeout } from 'timers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  avatar: String = "../../../assets/avatar.png";
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
  constructor() { }

  ngOnInit() {
    this.avatar = "../../../assets/avatar.png";
    this.array = ['../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg'];
    this.arrays = ['../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg','../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg','../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg'];
  }

}
