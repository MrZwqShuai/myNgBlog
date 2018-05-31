import { Component, OnInit, Input, OnDestroy, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Video } from './ng-video-interface';
  
@Component({
  selector: 'app-ng-video',
  templateUrl: './ng-video.component.html',
  styleUrls: ['./ng-video.component.scss']
})


export class NgVideoComponent implements OnInit {

  @Input() videoMedia: {title: string, resource: string, poster: string};

  @ViewChild('dragBtn') dragBtn: ElementRef;
  @ViewChild('progressTrack') progressTrack: ElementRef;
  @ViewChild('progressBar') progressBar: ElementRef;

  video: Video;

  isSHowControls: boolean = false;

  isLoadWating: boolean = false;

  hasPlayVideo: boolean = false;

  playStatus: boolean = false;

  startX: number = 0;

  moveX: number = 0;

  endX: number = 0;

  speedProgress: number;

  totalDuration: string = '00:00';

  currentDuration: string = "00:00";

  timer: any;

  /**
   * 移动的最小距离
   */
  minDragDistance: number = 0;

  /**
   * 最大距离
   */
  maxDragDistance: number = 0;

  constructor(private _renderer2: Renderer2, private _elementRef: ElementRef) { }

  ngOnInit() {
    this.video = this._elementRef.nativeElement.querySelector('.video');
    this.listenVideoProgtess(this.video);
    this.listenVideoLoadMetadata(this.video);
    this.minDragDistance = this.progressTrack.nativeElement.offsetLeft + this.dragBtn.nativeElement.offsetWidth / 2;
    this.maxDragDistance = this.progressTrack.nativeElement.offsetLeft + this.progressTrack.nativeElement.offsetWidth + this.dragBtn.nativeElement.offsetWidth / 2;
  }

  ngOnDestroy() {
    this.clearTimer(this.timer)
  }

  showLoading() {
    this.isLoadWating = true;
  }

  hideLoading() {
    this.isLoadWating = false;
  }

  listenVideoProgtess(resource: HTMLElement) {
    resource.addEventListener('progress', () => {
    })
  }

  listenVideoLoadMetadata(resource: HTMLElement) {
    resource.addEventListener('loadedmetadata', () => {
      this.totalDuration = this.getVideoTime(this.video.duration);
    })
  }


  listenVideoWait(resource: HTMLElement) {
    resource.addEventListener('waiting', () => {
      this.showLoading();
    })
  }

  listenVideoError(resource: HTMLElement) {
    resource.addEventListener('error', () => {
    })
  }

  listenVideoCanPlay(resource: HTMLElement) {
    resource.addEventListener('canplay', () => {
      this.hideLoading();
    })
  }

  playVideoBefore() {
    let playBtn = this._elementRef.nativeElement.querySelector('.ng-control-play');
    this.hasPlayVideo = true;
    this._renderer2.setStyle(playBtn, 'display', 'none');
    this.playVideo();
  }

  playVideo() {
    this.video.play();
    this.getRealTimeForVideo();
    this.listenVideoCanPlay(this.video);
    this.listenVideoWait(this.video);
  }

  pauseorplayVideo() {
    this.playStatus = !this.playStatus;
    this.playStatus ? this.video.pause() : this.video.play();
  }

  showVideoControls() {
    if (this.hasPlayVideo) {
      this.isSHowControls = !this.isSHowControls
    }
  }

  disableDashboardHide() {
    this.hasPlayVideo = false;
  }

  dragStart(target: TouchEvent): void {
    if (this.endX) {
      this.startX = this.endX - this.moveX
    } else {
      this.startX = target.changedTouches[0].clientX;
    }
  }

  dragMove(target: TouchEvent): void {
    if (target.changedTouches[0].clientX <= this.minDragDistance) {
      this.moveX = this.minDragDistance - this.progressTrack.nativeElement.offsetLeft - this.dragBtn.nativeElement.offsetWidth / 2;
    } else if (target.changedTouches[0].clientX >= this.maxDragDistance) {
      this.moveX = this.maxDragDistance - this.progressTrack.nativeElement.offsetLeft - this.dragBtn.nativeElement.offsetWidth / 2;
    } else {
      this.moveX = target.changedTouches[0].clientX - this.progressTrack.nativeElement.offsetLeft;
    }
    this._renderer2.setStyle(this.dragBtn.nativeElement, 'transform', `translate3d(${this.moveX}px ,0, 0)`);
    this._renderer2.setStyle(this.progressBar.nativeElement, 'width', `${this.moveX}px`);
    this.speedProgress = this.moveX / (this.progressTrack.nativeElement.offsetWidth - this.dragBtn.nativeElement.offsetWidth / 2);
    this.video.currentTime = this.speedProgress * this.video.duration;
  }

  dragEnd(target: TouchEvent): void {
    if (this.endX >= this.maxDragDistance) {
      this.endX = this.maxDragDistance;
    } else if (this.endX <= this.maxDragDistance) {
      this.endX = this.minDragDistance;
    } else {
      this.endX = target.changedTouches[0].clientX;
    }
    this.video.play();
    this.playStatus = false
  }

  clearTimer(time: any) {
    clearInterval(time);
  }

  /**
   * 监听视频实时进度
   */
  getRealTimeForVideo() {
    this.timer = setInterval(() => {
      this.speedProgress = this.video.currentTime / this.video.duration;
      this.currentDuration = this.getVideoTime(Math.floor(this.video.currentTime));
      this._renderer2.setStyle(this.dragBtn.nativeElement, 'transform', `translate3d(${this.speedProgress * this.progressTrack.nativeElement.offsetWidth}px, 0, 0)`);
      this._renderer2.setStyle(this.progressBar.nativeElement, 'width', `${this.speedProgress * this.progressTrack.nativeElement.offsetWidth}px`);
    }, 1000);
  }

  /**
   * 秒换算时分秒
   */
  getVideoTime(seconds: number): string {
    let duration: number = this.video.duration;
    let second: number = parseInt(String(seconds));
    let minute: number = 0;
    let hours: number = 0;
    if (seconds >= 60) {
      minute = parseInt(String(seconds / 60));
      second = parseInt(String(seconds % 60));
      if (minute >= 60) {
        hours = parseInt(String(minute / 60));
        minute = parseInt(String(minute % 60));
      }
    }
    let result: string = "" + parseInt(String(seconds));
    if (minute > 0) {
      if (second < 10) {
        result = "   " + minute + ":" + `0${second}`
      } else {
        result = "   " + minute + ":" + second
      }
    } else if (hours > 0) {
      if (minute < 10) {
        result = " " + hours + ":" + `0${minute}`
      } else {
        result = " " + hours + ":" + minute
      }
    } else {
      if (second < 10) {
        result = '00:' + `0${seconds}`
      } else {
        result = '00:' + seconds;
      }
    }
    return result
  }

}
