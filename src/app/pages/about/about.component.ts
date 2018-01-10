import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../common/animation'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [slideInDownAnimation]
})
export class AboutComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  constructor() { }

  ngOnInit() {
  }

}
