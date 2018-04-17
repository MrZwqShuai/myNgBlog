import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../common/animation'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [slideInDownAnimation]
})
export class AboutComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  // @HostBinding('style.position') position = 'absolute';
  
  bodyStyle = { padding: 0 };
  cards: Array<string> = ['1', '2', '3', '1', '2', '3', '1', '2', '3']
  cardHeadImg: string = 'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180'

  constructor() { }

  ngOnInit() {
  }

}
