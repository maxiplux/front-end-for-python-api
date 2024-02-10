import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
                provideRouter(routes),
                provideHttpClient(),

                { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
             ]
};
