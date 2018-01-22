import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/RX';
import 'rxjs/Rx';

const HOMEINFOS_URL = `http://localhost:8087/%E5%BC%A0%E6%96%87%E5%BC%BA`;
@Injectable()
export class HomeService {
    constructor(private _http: Http) {
    }

    getHomeInfos(): Observable<any[]> {
        return this._http.get(HOMEINFOS_URL)
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

}