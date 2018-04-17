import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { setInterval } from 'timers';

@Component({
  selector: 'app-ng-swiper',
  templateUrl: './ng-swiper.component.html',
  styleUrls: ['./ng-swiper.component.scss']
})
export class NgSwiperComponent implements OnInit {

  @Input() autoplay: boolean = true;

  @ViewChild('sliderContent')
  sliderContent: ElementRef;

  banners: Array<object> = [{
    imgurl: 'assets/images/banner.jpg',
    path: '1'
  }, {
    imgurl: 'assets/images/banner-2.jpg',
    path: '2'
  }, {
    imgurl: 'assets/images/banner-3.jpg',
    path: '3'
  }];

  screenImg: string = 'assets/images/banner.jpg';
  currentPagination: number = 0;

  constructor(private elementRef: ElementRef, private _renderer: Renderer2) { }

  ngOnInit() {
    this.autoPlay();
  }

  sliderStartUp(i: number) {
    this.currentPagination = i;
    this._renderer.setStyle(this.sliderContent.nativeElement, 'webkitTransform', `translate3d(${-33.3 * (i)}%, 0, 0)`);
  }

  autoPlay() {
    if (this.autoplay) {
      let timer = setInterval(() => {
        if (this.isLastSlider()) {
          this.currentPagination = -1;
        }
        this.currentPagination++;
        this.sliderStartUp(this.currentPagination);
      }, 3000);
    }
  }

  isLastSlider() {
    return this.currentPagination == this.banners.length - 1;
  }


}
