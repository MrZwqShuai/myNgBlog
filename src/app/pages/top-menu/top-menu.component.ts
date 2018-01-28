import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  private searchValue: string | number = '';

  private contacts: Array<Object> = [{
    title: "张文强",
  }, {
    title: "张帅"
  }, {
    title: "张文强真帅哦"
  }];
 
  constructor() { }

  ngOnInit() {
    this.searchArticle();
  }

  searchArticle() {
    console.log(this.searchValue);
  }

  onSearch(event: string) {
    alert(0);
    console.log(event);
  } 
}
