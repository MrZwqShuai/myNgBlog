import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Router } from '@angular/router';
// import { slideInDownAnimation } from '../common/animation'

import { SpeacialColumnServiceService } from '../service/speacial-column.service'

declare const require: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  // animations: [slideInDownAnimation]
})
export class AboutComponent implements OnInit {
  // @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  // @HostBinding('style.position') position = 'absolute';
  
  bodyStyle = { padding: 0 };
  cards: Array<Object> = [];
  cardHeadImg: Array<string> = [
    require('../../../assets/images/front-end.jpg'),
    require('../../../assets/images/back-end.jpg'),
    require('../../../assets/images/nodejs.jpg'),
    require('../../../assets/images/javascript.jpg'),
    require('../../../assets/images/nodejs.jpg'),
    require('../../../assets/images/nodejs.jpg'),
    require('../../../assets/images/nodejs.jpg'),
    require('../../../assets/images/nodejs.jpg'),
    require('../../../assets/images/nodejs.jpg'),
    require('../../../assets/images/nodejs.jpg'),
    require('../../../assets/images/nodejs.jpg'),
    require('../../../assets/images/nodejs.jpg'),
    require('../../../assets/images/nodejs.jpg'),
    require('../../../assets/images/nodejs.jpg'),
    require('../../../assets/images/nodejs.jpg'),
    require('../../../assets/images/nodejs.jpg')
  ]

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
