import { Observable, finalize, delay } from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.method === 'POST' && request.url.includes('create-order')) {
      return next.handle(request);
    }
    if (request.url.includes('check-email-exist')) {
      return next.handle(request);
    }
    this.loaderService.loader();

    return next.handle(request).pipe(
      delay(1000),
      finalize(() => {
        this.loaderService.hidingLoader();
      })
    );
  }
}
