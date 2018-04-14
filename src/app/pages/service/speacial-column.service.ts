import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/RX';
import 'rxjs/RX';

@Injectable()
export class SpeacialColumnServiceService {

  private BASEURL: string = 'http://47.98.137.213:8080/springmvc-study';
  private DEVBASEURL: string = 'http://localhost:8087';
  private ZHUANLAN_URL: string = `${this.BASEURL}/article/author`;
  private META_URL: string = `${this.BASEURL}/meta`;
  private POSTARTICLE_URL: string = `${this.BASEURL}/article/add`;
  private POSTIMG_URL: string = `${this.BASEURL}/article/img/add`;
  // private POSTIMG_URL: string = `${this.BASEURL}/article/img/add`;
  // private TAG_URL: string = `http://localhost:8087/t/7`

  constructor(private _http: Http) { }

  getArticleByUser(navIdx: number): Observable<any[]> {
    let options = {
      params: {
        uid: 1,
        createDateSort: navIdx
      }
    }
    return this._http.get(this.ZHUANLAN_URL, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // 获得文章的标签
  getAllMeta(): Observable<any[]> {
    return this._http.get(this.META_URL)
      .map(this.extractData)
      .catch(this.handleError)
  }

  // 通过文章标签获取文章列表
  getArticleByMeta(tagId: number): Observable<any[]> {
    const TAG_URL: string = `${this.BASEURL}/t/${tagId}`
    return this._http.get(TAG_URL)
    .map(this.extractData)
    .catch(this.handleError);
  }

  // 用户增加一篇文章
  saveOneArticleByUser(title: string | number, content: string, tagId: number): Observable<any[]> {
    let body = {
      title: title,
      content: content,
      tagId: tagId
    }
    console.log(body, String(body.content));
    return this._http.post(this.POSTARTICLE_URL,body)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * 上传图片
   * @param formdata
   */

   uploadImg(formData: FormData) {
     return this._http.post(this.POSTIMG_URL, formData)
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
