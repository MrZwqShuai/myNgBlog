import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/RX';
import 'rxjs/RX';

const params = new HttpParams()
   .set('articleId', '1');

@Injectable()
export class DetailService {

  private NGBLOG_URL: string = `http://localhost:8087/article`;

  constructor(private _http: Http) { }

  getOneArticleById(id): Observable<any[]> {
    return this._http.get(`${this.NGBLOG_URL}/getOneArticle/?articleId=${id}`)
      .do(console.log)
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res) {
    let body = res.json();
    return body || {};
  }


  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : '数据读取错误';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
