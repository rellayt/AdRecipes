import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User, UserWithCredentials } from '../models/user.model';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpPostMethodOptions } from '../models/HttpMethods.model';

@Injectable()
export class AuthService {
  private static readonly AUTH_PREFIX_PATH = 'auth';

  constructor(
    private apiService: ApiService<User>,
    private cookieService: CookieService
  ) {}

  get token(): string {
    return this.cookieService.get('token');
  }

  checkStatus(): Observable<User> {
    return this.apiService.get(`${AuthService.AUTH_PREFIX_PATH}/me`);
  }

  signIn(
    email: string,
    password: string
  ): Observable<User | UserWithCredentials> {
    const payload: HttpPostMethodOptions<User> = {
      skipInterception: true,
      body: {
        email,
        password,
      },
    };
    return this.apiService.post(
      `${AuthService.AUTH_PREFIX_PATH}/sign-in`,
      payload
    );
  }

  register(
    email: string,
    password: string,
    displayName: string
  ): Observable<User | UserWithCredentials> {
    const payload: HttpPostMethodOptions<User> = {
      skipInterception: true,
      body: {
        email,
        password,
        displayName,
      },
    };

    return this.apiService.post(
      `${AuthService.AUTH_PREFIX_PATH}/register`,
      payload
    );
  }
}
