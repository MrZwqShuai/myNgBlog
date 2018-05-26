import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-column',
  templateUrl: './video-column.component.html',
  styleUrls: ['./video-column.component.scss']
})
export class VideoColumnComponent implements OnInit {

  videoList: Array<number> = [1, 2, 3, 4, 5];
  
  constructor() { }

  ngOnInit() {
  }


}
