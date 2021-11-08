import { Observable, of } from 'rxjs';
import { SignIn, SignInFailure, SignInSuccess } from './auth.actions';
import { AuthService } from '../../services/auth.service';
import { UserWithCredentials } from '../../models/user.model';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  filter,
  map,
  mergeMap,
  shareReplay,
  switchMap,
} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { SignInCredentials } from '../../../../../api/dist/features/auth/auth.model';
import { LOGGED, LOGIN_ERROR } from '../../config/snackbar.config';
import { SnackBarService } from '../../../shared/services/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private snackbarService: SnackBarService
  ) {}

  signIn: Observable<UserWithCredentials> = createEffect(() =>
    this.actions$.pipe(
      ofType(SignIn),
      map(({ payload }) => payload),
      filter(Boolean),
      mergeMap((payload: SignInCredentials) => {
        return this.authService.signIn(payload.email, payload.password).pipe(
          map((userWithCredentials: UserWithCredentials) => {
            this.snackbarService.open(LOGGED);
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
}
