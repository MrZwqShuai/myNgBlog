import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-left',
  templateUrl: './column-left.component.html',
  styleUrls: ['./column-left.component.scss']
})
export class ColumnLeftComponent implements OnInit {

  public navList = [{ title: '推荐文章', key: 0 }, { title: '热门文章', key: 1 }, { title: '最新文章', key: 2 }];
  // 控制li切换的样式
  public idx = 0;
  public notes = [
    {
      author: '江流儿',
      createDate: '2018/1/22',
      title: '这是标题',
      content: '这是内容',
      meta: '这是标签'
    }
  ]
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.notes.push(
        {
          author: '江流儿',
          createDate: '2018/1/22',
          title: '这是标题',
          content: '这是内容',
          meta: '这是标签'
        })
    }
  }
  selectNav(i) {
    this.idx = i;
  }

}
