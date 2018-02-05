import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { DetailService } from '../../pages/service/detail.service';
import { DomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  admin: String = 'admin';
  article: any = '';
  private sub: any;
  private content: String = "<p>呜呜呜呜呜呜<p>";

  constructor(private _detailService: DetailService, private activatedRoute: ActivatedRoute, private _DomSanitizer: DomSanitizer) { }

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
        // 去除[innerHTML] warning
        this.article.content = this._DomSanitizer.bypassSecurityTrustHtml(article.data.content);
      }
      )
  }
}
