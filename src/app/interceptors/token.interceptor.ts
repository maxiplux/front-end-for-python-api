import {inject, Inject, Injectable} from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHandlerFn, HttpInterceptorFn
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';




export const tokenInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const authService = inject(AuthService);
  let token = authService.token;


  if (token) {
    const cloned = req.clone({
      setHeaders: {
        authorization: `Bearer ${token}`,
      },
    });
    return next(cloned);
  }
  else {
    return next(req);
  }
};


