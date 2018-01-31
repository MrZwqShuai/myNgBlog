import { Component, OnInit } from '@angular/core';
import { SpeacialColumnServiceService } from '../../service/speacial-column.service';

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

  private channels: Array<String> = [
    'Java',
    'Javascript',
    'NodeJs',
    'Angular',
    'Vue',
    'MYSQL'
  ];

  constructor(private _speacialColumnServiceService: SpeacialColumnServiceService) { }

  ngOnInit() {
    // this.getAllMeta();
  }

  getAllMeta() {
    this._speacialColumnServiceService.getAllMeta()
      .subscribe((metaData: any) => {
        this.channels = metaData.data.slice(0, 6);
        console.log(this.channels, '222');
      })
  }

}
