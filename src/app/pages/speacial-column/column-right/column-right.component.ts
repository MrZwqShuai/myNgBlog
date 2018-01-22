import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-right',
  templateUrl: './column-right.component.html',
  styleUrls: ['./column-right.component.scss']
})
export class ColumnRightComponent implements OnInit {

  public hotNotes: Array<Object> = [{
    title: '程序生涯'
  }, {
    title: '篮球生涯'
  }, {
    title: '游戏生涯'
  }];

  constructor() { }

  ngOnInit() {
  }

}
