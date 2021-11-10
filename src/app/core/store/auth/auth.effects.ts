import { Observable, of } from 'rxjs';
import {
  Logout,
  Register,
  RegisterFailure,
  RegisterSuccess,
  SignIn,
  SignInFailure,
  SignInSuccess,
  TokenValidation,
  TokenValidationFailure,
  TokenValidationSuccess,
} from './auth.actions';
import { AuthService } from '../../services/auth.service';
import { User, UserWithCredentials } from '../../models/user.model';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  AUTHENTICATED,
  LOGGED,
  LOGIN_ERROR,
  REGISTER_ERROR,
  REGISTERED,
} from '../../config/snackbar.config';
import { SnackBarService } from '../../../shared/services/snackbar.service';
import { SignInCredentials } from '../../../../../api/src/features/auth/auth.model';
import { TypedAction } from '@ngrx/store/src/models';
import { RegisterCredentials } from '../../models/auth.model';
import { CookieService } from 'ngx-cookie-service';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private snackbarService: SnackBarService,
    private cookieService: CookieService
  ) {}

  signIn: Observable<TypedAction<string>> = createEffect(() =>
    this.actions$.pipe(
      ofType(SignIn),
      map(({ payload }) => payload),
      filter(Boolean),
      switchMap(({ email, password }: SignInCredentials) => {
        return this.authService.signIn(email, password).pipe(
          tap(({ tokenCredentials }: UserWithCredentials) => {
            this.snackbarService.open(LOGGED);
            this.cookieService.set('token', tokenCredentials.accessToken);
          }),
          map((userWithCredentials: UserWithCredentials) => {
            this.snackbarService.open(LOGGED);
            this.cookieService.set(
              'token',
              userWithCredentials.tokenCredentials.accessToken
            );
            return SignInSuccess({ user: userWithCredentials });
          }),
          catchError((error) => {
            this.snackbarService.open(LOGIN_ERROR);
            return of(SignInFailure({ error: error }));
          })
        );
      })
    )
  );

  register: Observable<TypedAction<string>> = createEffect(() =>
    this.actions$.pipe(
      ofType(Register),
      map(({ payload }) => payload),
      filter(Boolean),
      switchMap(({ email, password, displayName }: RegisterCredentials) => {
        return this.authService.register(email, password, displayName).pipe(
          tap(({ tokenCredentials }: UserWithCredentials) => {
            this.snackbarService.open(REGISTERED);
            this.cookieService.set('token', tokenCredentials.accessToken);
          }),
          map((userWithCredentials: UserWithCredentials) =>
            RegisterSuccess({ user: userWithCredentials })
          ),
          catchError((error) => {
            this.snackbarService.open(REGISTER_ERROR);
            return of(RegisterFailure({ error: error }));
          })
        );
      })
    )
  );

  checkStatus: Observable<TypedAction<string>> = createEffect(() =>
    this.actions$.pipe(
      ofType(TokenValidation),
      filter(Boolean),
      switchMap(() => {
        return this.authService.checkStatus().pipe(
          map((user: User) => {
            this.snackbarService.open(AUTHENTICATED);
            return TokenValidationSuccess({ user });
          }),
          catchError((error) => {
            this.snackbarService.open(LOGIN_ERROR);
            return of(TokenValidationFailure({ error: error }));
          })
        );
      })
    )
  );

  logout = createEffect(
    () =>
      this.actions$.pipe(
        ofType(Logout),
        filter(Boolean),
        tap(() => this.cookieService.delete('token'))
      ),
    { dispatch: false }
  );
}
