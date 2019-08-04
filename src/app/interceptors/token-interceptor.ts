import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CommService } from "../services/comm.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private commService: CommService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.commService.serverSettings && this.commService.serverSettings.authorizationToken) {
      return next.handle(
        req.clone({
          headers: req.headers.append("Authorization", this.commService.serverSettings.authorizationToken)
        })
      );
    }
    return next.handle(req);
  }
}

export const TokenInterceptorProviders  = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
];
