import { Component, OnInit, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-column-left',
  templateUrl: './column-left.component.html',
  styleUrls: ['./column-left.component.scss']
})
export class ColumnLeftComponent implements OnInit {

  public navList = [{ title: '推荐文章', key: 0 }, { title: '热门文章', key: 1 }, { title: '最新文章', key: 2 }];
  // 控制li切换的样式
  public idx:number = 0;
  public opacityArctContainer: number = 1;
  private articleEl: ElementRef;
  public notes: Array<Object> = [
    {
      author: '江流儿',
      createDate: '2018/1/22',
      title: '这是标题',
      content: '      ❤ 有读者在后台问我，说:“他觉得大学上得他挺无奈的。刚上大学的他，完全没了高中的上进努力，平时上课要么睡觉，要么玩手机，老师讲的什么内容也几乎一无所知，期末考试全靠拿着厚厚...',
      meta: '这是标签'
    }
  ]
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
  }

  ngOnInit() {
    this.articleEl = this.elementRef.nativeElement.querySelector('.article-list-container');
    for (let i = 0; i < 10; i++) {
      this.notes.push(
        {
          author: '江流儿',
          createDate: '2018/1/22',
          title: '这是标题',
          content: '      ❤ 有读者在后台问我，说:“他觉得大学上得他挺无奈的。刚上大学的他，完全没了高中的上进努力，平时上课要么睡觉，要么玩手机，老师讲的什么内容也几乎一无所知，期末考试全靠拿着厚厚...',
          meta: '这是标签'
        })
    }
  }
  selectNav(i:number) {
    this.idx = i;
    this.selectAnimation(this.articleEl)
  }
  selectAnimation(el: ElementRef) {
    console.log(el, '---')
    // this.renderer.setElementStyle(el.nativeElement, 'opacity', '.6');
    this.renderer.setStyle(el, 'opacity', '.6');
  }

}
