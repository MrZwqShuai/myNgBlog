import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-right',
  templateUrl: './column-right.component.html',
  styleUrls: ['./column-right.component.scss']
})
export class ColumnRightComponent implements OnInit {

  private hotNotes: Array<Object> = [{
    title: '程序生涯'
  }, {
    title: '篮球生涯'
  }, {
    title: '游戏生涯'
  }];

  private news: Array<Object> = [{
    title: '微软可能会在智能耳机上与苹果AirPods竞争'
  }, {
    title: '消息称SAP/McAfee/赛门铁克正让俄罗斯监管机'
  }, {
    title: '《绝地求生》Xbox One版销量已达400万 官方将免费送3万BP币'
  }];

  private channels: Array<Object> = [{
    title: 'Java'
  }, {
    title: 'Javascript'
  }, {
    title: 'NodeJs'
  }, {
    title: 'Angular'
  }, {
    title: 'Vue'
  }, {
    title: 'MYSQL'
  }];

  constructor() { }

  ngOnInit() {
  }

}
