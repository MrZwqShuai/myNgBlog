import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  array = []
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.array = ['../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg', '../../../assets/banner.jpg']
    }, 500)
  }

}
