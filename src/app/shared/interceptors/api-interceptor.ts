import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5';


@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const md5 = new Md5();
    const apikey = '44353bf392db72cda5d938161de529dd';
    const ts = '1';
    const hash = md5.appendStr('1')
    .appendStr('05bd44433abd1771c09085b0f61cae6d358642dd').appendStr('44353bf392db72cda5d938161de529dd').end().toString();

    return next.handle(httpRequest.clone({ setHeaders: { apikey, ts, hash } }));
  }
}
