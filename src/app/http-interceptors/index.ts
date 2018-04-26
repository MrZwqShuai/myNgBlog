import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BlogInterceptor } from './blog-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: BlogInterceptor, multi: true },
];