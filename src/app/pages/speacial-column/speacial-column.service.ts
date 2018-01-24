import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/RX';
import 'rxjs/RX';

const ZHUANLAN_URL = `http://localhost:8087/article/1`;
@Injectable()
export class SpeacialColumnServiceService {

  constructor(private _http: Http) { }

  getArticleByUser(): Observable<any[]> {
    return this._http.get(ZHUANLAN_URL)
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
