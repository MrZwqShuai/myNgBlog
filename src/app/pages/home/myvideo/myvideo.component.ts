import { Component, OnInit, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-myvideo',
  templateUrl: './myvideo.component.html',
  styleUrls: ['./myvideo.component.scss']
})
export class MyvideoComponent implements OnInit {

  private playStatus: Boolean = true;
  private pauseStatus: Boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

  ngAfterViewInit() {
    let video = this.elementRef.nativeElement.querySelector('#myvideo');
    let playBtn = this.elementRef.nativeElement.querySelector('.play');
  }

  ngOnInit() {
    
  }

  playVideo() {
    this.playStatus = false;
    this.pauseStatus = true;
    this.elementRef.nativeElement.querySelector('#myvideo').play();
  }

  pauseVideo() {
    this.pauseStatus = false;
    this.playStatus = true;
    this.elementRef.nativeElement.querySelector('#myvideo').pause();
  }

}
