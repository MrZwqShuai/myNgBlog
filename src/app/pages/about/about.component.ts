import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../common/animation'

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
  cards: Array<string> = ['1', '2', '3', '1', '2', '3', '1', '2', '3']

  constructor() { }

  ngOnInit() {
  }

}
