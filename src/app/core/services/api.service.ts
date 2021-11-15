import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpGetMethodOptions,
  HttpPostMethodOptions,
} from '../models/HttpMethods.model';

@Injectable()
export class ApiService<T> {
  constructor(private http: HttpClient) {}

  private static formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, options?: HttpGetMethodOptions): Observable<T> {
    const headers = options?.skipInterception && { headers: { skip: 'true' } };
    const params = options?.queryParams && { params: options.queryParams };

    return this.http
      .get<T>(`${environment.API_URL}${path}`, {
        ...params,
        ...headers,
      })
      .pipe(catchError(ApiService.formatErrors));
  }

  post(path: string, options?: HttpPostMethodOptions<T>): Observable<T> {
    const headers = options?.skipInterception && { headers: { skip: 'true' } };
    const body = options.body ? { ...options.body } : options.formData;

    return this.http
      .post<T>(`${environment.API_URL}${path}`, body, headers)
      .pipe(catchError(ApiService.formatErrors));
  }
}
