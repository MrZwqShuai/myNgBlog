import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { slideInDownAnimation } from '../common/animation'

import { SpeacialColumnServiceService } from '../service/speacial-column.service'

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
  cards: Array<Object> = [];
  cardHeadImg: string = 'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180'

  constructor(private router: Router, private _speacialColumnServiceService: SpeacialColumnServiceService) { }


  ngOnInit() {
    this.getAllMeta();
  }

   getAllMeta() {
    this._speacialColumnServiceService.getAllMeta()
      .subscribe((data: any) => {
        console.log(data);
        if(data.code === 0) {
          this.cards = data.data;
        } else {
          console.log(data.message);
        }
      }, (error) => {
        console.log(error);
      })
  }

  navigateToDetail(meta) {
    this.router.navigate(['t'], {queryParams: {name: meta.name, id: meta.id}});
  }

}
