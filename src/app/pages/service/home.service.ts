import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/RX';
import 'rxjs/Rx';

@Injectable()
export class HomeService {

    
    // private HOMEINFOS_URL: string = `http://localhost:8087/%E5%BC%A0%E6%96%87%E5%BC%BA`;
    private DEVBASEURL: string = `http://localhost:8087`;
    private BASEURL: string = `http://47.98.137.213:8080/springmvc-study/`;
    private HOMEINFOS_URL: string = `http://47.98.137.213:8080/springmvc-study/%E5%BC%A0%E6%96%87%E5%BC%BA`;
    // 用于顶部搜索框展示
    private showPhoneSearchBtn: boolean = false;

    constructor(private _http: Http) {
    }

    getArticleByKeywords(keywords: string | number) {
        let options = {
            params: {
                keywords: keywords
            }
        };
        return this._http.get(`${this.BASEURL}/article/search`, options)
          .map(this.extractData)
          .catch(this.handleError);
    }

    getHomeInfos(): Observable<any[]> {
        return this._http.get(this.HOMEINFOS_URL)
        .map(this.extractData)
        .catch(this.handleError);
    }

    private extractData(res) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    setShowPhoneSearchBtn(showBtn): boolean {
        this.showPhoneSearchBtn = showBtn;
        return this.showPhoneSearchBtn
    }

    getShowPhoneSearchBtn(): boolean {
        return this.showPhoneSearchBtn;
    }

}