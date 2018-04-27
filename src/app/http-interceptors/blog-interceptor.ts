import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { LoadingService } from '../core/loading/loading.service';

export interface Result extends HttpResponse<any> {
  code: number;
  data: object;
  message: string;
}

@Injectable()
export class BlogInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    let ok: string;
    this.loadingService.show();
    return next.handle(req).pipe(
      tap(
        event => console.log(event),
        error => {ok = 'failed'; alert('数据读取错误')}
      ),
      finalize(() => {
        console.log('is over');
        this.loadingService.hide();
      })
    );
  }

}
