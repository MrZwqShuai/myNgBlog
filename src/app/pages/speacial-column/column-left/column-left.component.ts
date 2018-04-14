import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { SpeacialColumnServiceService } from '../../service/speacial-column.service';
import { COLUMNNAVLIST } from '../../static-data/static-nav';

@Component({
  selector: 'app-column-left',
  templateUrl: './column-left.component.html',
  styleUrls: ['./column-left.component.scss']
})
export class ColumnLeftComponent implements OnInit {
  
  @Input() showSearchResult: boolean = false;
  @Input() keywords: string | number = '';
  @Input() articleLstBySearch: Array<object> = [];

  public navList = COLUMNNAVLIST;
  // 控制li切换的样式
  public idx: number = 0;
  public opacityArctContainer: number = 1;
  public articleEl: ElementRef;
  public errorSign: string | boolean;
  public notes: Array<Object> = [
  ]

  constructor(public router: Router, public elementRef: ElementRef, public renderer: Renderer2, public _speacialColumnServiceService: SpeacialColumnServiceService) {
  }

  ngOnInit() {
    this.articleEl = this.elementRef.nativeElement.querySelector('.article-list-container');
    this.initArticleList();
    console.log(this.articleLstBySearch, 'articleLstBySearch')
  }

  /**
   * 初始化列表
   */
  initArticleList() {
    if(this.showSearchResult) {
      this.getArticleBySearch();
    } else {
      this.getArticleByUser(0);
    }
  }

  selectNav(i: number) {
    this.idx = i;
    this.selectLoading(this.articleEl, '.3');
    this.getArticleByUser(i);
  }
  selectLoading(el: ElementRef, opacity: string) {
    this.renderer.setStyle(el, 'opacity', opacity);
  }

  /**
   * 通过搜索传递文章列表
   */
  getArticleBySearch() {
    this.notes = this.articleLstBySearch;
  }

  // 通过用户名获取文章列表
  getArticleByUser(navIdx: number) {
    return this._speacialColumnServiceService.getArticleByUser(navIdx)
      .subscribe((notesData: any) => {
        console.log(notesData, 2);
        this.articleLstBySearch = notesData.data;
        this.selectLoading(this.articleEl, '1');
      }, (error: any) => {
        this.closeError(error);
        if (error) {
          this.selectLoading(this.articleEl, '1');
        }
      });
  }

  // 关闭error提示
  closeError(errorMessage) {
    this.errorSign = errorMessage;
    setTimeout(() => {
      this.errorSign = false;
    }, 1000)
  }

  // 跳转文章详情页
  goNoteDetails(articleId, articleTitle) {
    this.router.navigate([`article/p`], {
      queryParams: {
        articleId: articleId,
        title: articleTitle
      }
    });
  }

}
