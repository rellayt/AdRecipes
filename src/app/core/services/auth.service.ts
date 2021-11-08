import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BaseCredentials, UserWithCredentials } from '../models/user.model';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {
  private static readonly AUTH_PREFIX_PATH = 'auth';

  constructor(
    private apiService: ApiService<BaseCredentials>,
    private cookieService: CookieService
  ) {}

  private get token(): string {
    return this.cookieService.get('token');
  }

  signIn(
    email: string,
    password: string
  ): Observable<BaseCredentials | UserWithCredentials> {
    return this.apiService.post(`${AuthService.AUTH_PREFIX_PATH}/sign-in`, {
      email,
      password,
    });
  }

  register(
    email: string,
    password: string,
    displayName: string
  ): Observable<BaseCredentials | UserWithCredentials> {
    return this.apiService.post(`${AuthService.AUTH_PREFIX_PATH}/register`, {
      email,
      password,
      displayName,
    });
  }
}
