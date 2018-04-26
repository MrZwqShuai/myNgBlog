import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoadingService } from '../core/loading/loading.service';
@Injectable()
export class BlogInterceptor implements HttpInterceptor {

  constructor( private loadingService: LoadingService) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      console.log('拦截器...', this.loadingService.show)
      this.loadingService.show();
    return next.handle(req);
  }
}
