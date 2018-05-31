import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-video-column',
  templateUrl: './video-column.component.html',
  styleUrls: ['./video-column.component.scss'],
})
export class VideoColumnComponent implements OnInit {


  videoList: Array<{ title: string, resource: string, poster: string }> = [
    {
      title: '不能说的秘密',
      resource: 'assets/video/qt.mp4',
      poster: ''
    }, {
      title: '艾佛森10分钟超长集锦',
      resource: 'assets/video/Allen-Iverson.mp4',
      poster: ''
    }, {
      title: '全明星20佳进球',
      resource: 'assets/video/all-star.mp4',
      poster: ''
    }, {
      title: '2018常规赛20大转身过人',
      resource: 'assets/video/guoren.mp4',
      poster: ''
    }, {
      title: '欧文过人集锦',
      resource: 'assets/video/Kyrie-Irving.mp4',
      poster: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }


}
