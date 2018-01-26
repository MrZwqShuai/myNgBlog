import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { SpeacialColumnServiceService } from '../../../pages/service/speacial-column.service';

@Component({
  selector: 'app-column-left',
  templateUrl: './column-left.component.html',
  styleUrls: ['./column-left.component.scss']
})
export class ColumnLeftComponent implements OnInit {

  public navList = [{ title: '推荐文章', key: 0 }, { title: '热门文章', key: 1 }, { title: '最新文章', key: 2 }];
  // 控制li切换的样式
  public idx: number = 0;
  public opacityArctContainer: number = 1;
  private articleEl: ElementRef;
  private errorSign: string | boolean;
  public notes: Array<Object> = [
    {
      author: '江流儿',
      createDate: '2018/1/22',
      title: '这是标题',
      content: '      ❤ 有读者在后台问我，说:“他觉得大学上得他挺无奈的。刚上大学的他，完全没了高中的上进努力，平时上课要么睡觉，要么玩手机，老师讲的什么内容也几乎一无所知，期末考试全靠拿着厚厚...',
      meta: '这是标签'
    }
  ]
  constructor(private router: Router, private elementRef: ElementRef, private renderer: Renderer2, private _speacialColumnServiceService: SpeacialColumnServiceService) {
  }

  ngOnInit() {
    this.articleEl = this.elementRef.nativeElement.querySelector('.article-list-container');
    this.getArticleByUser();
  }
  selectNav(i: number) {
    this.idx = i;
    this.selectLoading(this.articleEl, '.3');
    this.getArticleByUser();
  }
  selectLoading(el: ElementRef, opacity: string) {
    this.renderer.setStyle(el, 'opacity', opacity);
  }

  // 通过用户名获取文章列表
  getArticleByUser() {
    return this._speacialColumnServiceService.getArticleByUser()
      .subscribe((notesData: any) => {
        console.log(notesData, 2);
        this.notes = notesData.data;
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
