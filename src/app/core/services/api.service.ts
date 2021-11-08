import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService<T> {
  constructor(private http: HttpClient) {}

  private static formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, queryParams?): Observable<T> {
    return this.http
      .get<T>(`${environment.API_URL}${path}`, { params: queryParams })
      .pipe(catchError(ApiService.formatErrors));
  }

  post(path: string, body: T): Observable<T> {
    return this.http
      .post<T>(`${environment.API_URL}${path}`, { ...body })
      .pipe(catchError(ApiService.formatErrors));
  }
}
