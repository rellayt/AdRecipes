import { Injectable } from '@nestjs/common';
// @ts-ignore
import { catchError, from, map, Observable, of, switchMap, tap } from 'rxjs';
import {
  RegisterCredentials,
  SignInCredentials,
} from '../../features/auth/auth.model';
import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  User,
} from '@firebase/auth';
import { FirebaseAuthAdmin } from './firebase-auth-admin.abstract';

@Injectable()
export class FirebaseAuthService extends FirebaseAuthAdmin {
  private static get auth(): Auth {
    return getAuth();
  }

  signIn({ email, password }: SignInCredentials): Observable<User> {
    const loginPromise = signInWithEmailAndPassword(
      FirebaseAuthService.auth,
      email,
      password,
    );
    return from(loginPromise).pipe(map(({ user }) => user));
  }

  register({
    email,
    password,
    displayName,
  }: RegisterCredentials): Observable<User> {
    const registeredUser = createUserWithEmailAndPassword(
      FirebaseAuthService.auth,
      email,
      password,
    );
    return from(registeredUser).pipe(
      tap(({ user }) => updateProfile(user, { displayName })),
      map(({ user }) => ({
        ...user,
        displayName,
      })),
    );
    // return of(null);
  }
}
