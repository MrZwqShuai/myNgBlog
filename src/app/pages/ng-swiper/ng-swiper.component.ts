import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-swiper',
  templateUrl: './ng-swiper.component.html',
  styleUrls: ['./ng-swiper.component.scss']
})
export class NgSwiperComponent implements OnInit {

  screenImg: string = 'assets/images/banner.jpg';

  constructor() { }

  ngOnInit() {
  }

}
