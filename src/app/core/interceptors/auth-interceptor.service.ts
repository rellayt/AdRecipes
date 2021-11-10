import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService<T extends unknown> {
  intercept(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    return req.headers.get('skip') || req.headers.get('AuthToken')
      ? next.handle(req)
      : next.handle(this.getAuthorizedRequest(req)).pipe(
          catchError((err, _) => {
            if (err instanceof HttpErrorResponse && err.status === 401) {
              return of(null);
            }

            return throwError(err);
          })
        );
  }

  getAuthorizedRequest(req: HttpRequest<T>) {
    return req.clone({
      setHeaders: {
        AuthToken: this.authService.token,
      },
    });
  }

  constructor(private authService: AuthService) {}
}
