import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/RX';
import 'rxjs/RX';

@Injectable()
export class DetailService {

  // private DEVBASEURL: string = 'http://localhost:8087';
  // private NGBLOG_URL: string = `${this.DEVBASEURL}/article`;
  private NGBLOG_URL: string = `http://47.98.137.213:8080/springmvc-study/article`;

  constructor(private _http: HttpClient) { }

  getOneArticleById(id): Observable<any[]> {
    return this._http.get(`${this.NGBLOG_URL}/getOneArticle/?articleId=${id}`)
      .do(console.log)
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res) {
    return res;
  }


  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : '数据读取错误';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
