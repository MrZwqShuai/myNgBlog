import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-top',
  templateUrl: './go-top.component.html',
  styleUrls: ['./go-top.component.scss']
})
export class GoTopComponent implements OnInit {

  _this = this;

  constructor() { }

  ngOnInit() {
  }

  goTop() {
    function top() {
    console.log(9);
    }
    window.requestAnimationFrame(this.goTop)
  }

}
