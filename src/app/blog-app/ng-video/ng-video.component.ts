import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Video } from './ng-video-interface';

@Component({
  selector: 'app-ng-video',
  templateUrl: './ng-video.component.html',
  styleUrls: ['./ng-video.component.scss']
})


export class NgVideoComponent implements OnInit {

  video: Video;
  
  videoList: Array<number> = [1, 2, 3, 4, 5];

  isSHowControls: boolean = false;

  hasPlayVideo: boolean = false;

  playStatus: boolean = false;

  constructor(private _renderer2: Renderer2, private _elementRef: ElementRef) { }

  ngOnInit() {
    this.video = this._elementRef.nativeElement.querySelector('.video');
 }

  playVideoBefore() {
    let playBtn = this._elementRef.nativeElement.querySelector('.ng-control-play');
    this.hasPlayVideo = true;
    this._renderer2.setStyle(playBtn, 'display', 'none');
    this.playVideo();
  }

  playVideo() {
    this.video.play();
  }

  pauseorplayVideo() {
    this.playStatus = !this.playStatus;
    this.playStatus ? this.video.pause() : this.video.play();
  }

  showVideoControls() {
    if(this.hasPlayVideo) {
      this.isSHowControls = !this.isSHowControls
    }
  }

  disableDashboardHide() {
    this.hasPlayVideo = false;
  }

}
