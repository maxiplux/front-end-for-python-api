import {inject, Injectable} from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpInterceptorFn, HttpHandlerFn
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import Swal from 'sweetalert2';


import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const authService = inject(AuthService);
  const router: Router=inject(Router);

  return next(req).pipe(
    catchError(e => {
      if (e.status == 401)
      {

        if (authService.isAuthenticated())
        {
          authService.logout();
        }
        router.navigate(['/login']);
      }

      if (e.status == 403)
      {
        Swal.fire('Access denied', `Hello ${authService.usuario.username} you do not have access to this resource!`, 'warning');
        router.navigate(['/403']);
      }
      return throwError(e);
    })
  );


};



