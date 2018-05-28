import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HomeService } from '../service/home.service';
import { CommonService } from '../service/common.service';


@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  public searchValue: string | number = '';

  private contacts: Array<Object> = [{
    title: "张文强",
  }, {
    title: "张帅"
  }, {
    title: "张文强真帅哦"
  }];
 
  public showPhoneSearchBtn: boolean = this._homeService.getShowPhoneSearchBtn();
  // 用于判断失去焦点是否来自搜索框
  public blurFromSearchBtn: boolean = true;

  constructor(public _homeService: HomeService, private _commonService: CommonService, private _router: Router) { }

  ngOnInit() {
    this.searchArticle();
    console.log(this._homeService.getShowPhoneSearchBtn())
    this.showPhoneSearchBtn = this._homeService.getShowPhoneSearchBtn();
  }

  searchArticle() {
    console.log(this.searchValue);
  }

  onSearch(event: KeyboardEvent) {
    console.log(event.keyCode);
    if(event.keyCode == 13) {
      this.findArticleByKeyWords(this.searchValue);
    }
  } 

  showSearchInput(searchValue) {
    if(this._homeService.getShowPhoneSearchBtn()) {
      this.findArticleByKeyWords(searchValue);
      return 
    }
    this.showPhoneSearchBtn = this._homeService.setShowPhoneSearchBtn(true);
  }

  findArticleByKeyWords(keyWords: string | number) {
    this.blurFromSearchBtn = false;
    this._homeService.getArticleByKeywords(keyWords)
      .subscribe((data: any) => {
        if(data.code === 0) {
          this._commonService.articleByKeywords = data.data.articles;
          this._commonService.keywords = keyWords;
        } else {
          alert(data.message);
        }
      })
    this._router.navigate(['article/search']);
  }

  hideSearchInput() {
    if(this.blurFromSearchBtn) {
      return;
    }
    this.showPhoneSearchBtn = this._homeService.setShowPhoneSearchBtn(false);
  }

  writeArticle() {
    alert('Permission denied');
  }
}
