import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DetailService } from '../../pages/service/detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  admin: String = 'admin';
  article: any = '';
  private sub: any;

  constructor(private _detailService: DetailService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.activatedRoute.snapshot.params['articleId'];
    this.sub = this.activatedRoute
      .queryParams
      .subscribe(queryParams => {
        let articleId: string = queryParams.articleId;
        let title: string = queryParams.title;
        this.getOneArticleById(Number(articleId));
      });
  }

  ngOnDestory() {
    this.sub.unsubscribe();
  }

  getOneArticleById(id: number) {
    this._detailService.getOneArticleById(id)
      .subscribe(
      (article: any) => {
        this.article = article.data;
      }
      )
  }
}
