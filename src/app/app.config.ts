import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import {tokenInterceptor} from './interceptors/token.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
                provideRouter(routes),
                provideHttpClient(withInterceptors([tokenInterceptor,authInterceptor ]))


             ]
};
