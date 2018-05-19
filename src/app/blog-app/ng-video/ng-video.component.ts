import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Video } from './ng-video-interface';

@Component({
  selector: 'app-ng-video',
  templateUrl: './ng-video.component.html',
  styleUrls: ['./ng-video.component.scss']
})


export class NgVideoComponent implements OnInit {

  @ViewChild('dragBtn') dragBtn: ElementRef;
  @ViewChild('progressTrack') progressTrack: ElementRef;

  video: Video;

  videoList: Array<number> = [1, 2, 3, 4, 5];

  isSHowControls: boolean = false;

  hasPlayVideo: boolean = false;

  playStatus: boolean = false;

  startX: number = 0;

  moveX: number = 0;

  endX: number = 0;

  totalDuration: string = '00: 00';

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
    this.minDragDistance = this.progressTrack.nativeElement.offsetLeft + this.dragBtn.nativeElement.offsetWidth / 2;
    this.maxDragDistance = this.progressTrack.nativeElement.offsetLeft + this.progressTrack.nativeElement.offsetWidth + this.dragBtn.nativeElement.offsetWidth / 2;
  }

  listenVideoProgtess(resource: HTMLElement) {
    resource.addEventListener('progress', () => {
      // console.log('正在请求数据..', this.video.currentTime)
    })
  }

  listenVideoWaiting(resource: HTMLElement) {
    resource.addEventListener('waiting', () => {
      console.log('监听等待下载..')
    })
    // this.listenVideoCanPlay(resource);
  }

  listenVideoStalled(resource: HTMLElement) {
    resource.addEventListener('stalled', () => {
      console.log('网络失速..')
    })
  }

  listenVideoError(resource: HTMLElement) {
    resource.addEventListener('error', () => {
      console.log('请求数据出错..')
    })
  }

  listenVideoCanPlay(resource: HTMLElement) {
    resource.addEventListener('canplay', () => {
      console.log('监听可以播放..')
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
    this.listenVideoCanPlay(this.video);
    this.totalDuration = this.getVideoHours(this.video.duration);
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
    console.log('开始距离', this.startX)
  }

  dragMove(target: TouchEvent): void {
    console.log(target.changedTouches[0].clientX, '鼠标的位置')
    if (target.changedTouches[0].clientX <= this.minDragDistance) {
      this.moveX = this.minDragDistance - this.progressTrack.nativeElement.offsetLeft - this.dragBtn.nativeElement.offsetWidth / 2;
    } else if (target.changedTouches[0].clientX >= this.maxDragDistance) {
      console.log('超出最大范围')
      this.moveX = this.maxDragDistance - this.progressTrack.nativeElement.offsetLeft - this.dragBtn.nativeElement.offsetWidth / 2;
    } else {
      this.moveX = target.changedTouches[0].clientX - this.progressTrack.nativeElement.offsetLeft;
    }
    console.log(this.moveX)
    this._renderer2.setStyle(this.dragBtn.nativeElement, 'transform', `translate3d(${this.moveX}px ,0, 0)`);
    let speedProgress: number = this.moveX / (this.progressTrack.nativeElement.offsetWidth - this.dragBtn.nativeElement.offsetWidth / 2);
    this.video.currentTime = speedProgress * this.video.duration;
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

  /**
   * 秒换算时分秒
   */
  getVideoHours(seconds: number): string {
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
        result = minute + ": " + `0${second}`
      } else {
        result = minute + ": " + second
      }
    } else if (hours > 0) {
      if (minute < 10) {
        result = hours + ": " + `0${minute}`
      } else {
        result = hours + ": " + minute
      }
    }
    return result
  }

}
