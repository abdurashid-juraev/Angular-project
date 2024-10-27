import { TokenResponse } from './auth.interface';
import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { catchError, Observable, pipe, switchMap, throwError } from 'rxjs';

let isRefreshing = false;

export const authTokenInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const authService: AuthService = inject(AuthService);
  const token: string | null = authService.token;

  if (!token) return next(req);

  if (isRefreshing) {
    return refreshAndProcced(authService, req, next);
  }

  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(addToken(req, token)).pipe(
    catchError((error) => {
      if (error.status === 403) {
        return refreshAndProcced(authService, req, next);
      }
      return throwError(() => {
        error;
      });
    })
  );
};

const refreshAndProcced = (
  authService: AuthService,
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  if (!isRefreshing) {
    isRefreshing = true;
    return authService.refreshAuthToken().pipe(
      switchMap((res: TokenResponse) => {
        isRefreshing = false;
        return next(addToken(req, res.access_token));
      })
    );
  }
  return next(addToken(req, authService.token!));
};
const addToken = (
  req: HttpRequest<unknown>,
  token: string
): HttpRequest<unknown> => {
  return req.clone({
    setHeaders: {
      Authorization: `Bearer${token}`,
    },
  });
};
