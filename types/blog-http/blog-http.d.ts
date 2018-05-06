import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaderResponse, HttpHeaders, HttpInterceptor, HttpParams, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from '@angular/common/http';
export declare class WqBLogHttp {
    protected http: HttpClient;
    constructor(http: HttpClient) { }
}
export declare const GET: (url: string) => (target: WqBLogHttp, PropertyKey: string, descriptor: PropertyDescriptor) => any;

export declare const POST: (url: string) => (target: WqBLogHttp, PropertyKey: string, descriptor: PropertyDescriptor) => any;

export declare const DELETE: (url: string) => (target: WqBLogHttp, PropertyKey: string, descriptor: PropertyDescriptor) => void;

export declare const UPDATE: (url: string) => (target: WqBLogHttp, PropertyKey: string, descriptor: PropertyDescriptor) => void;