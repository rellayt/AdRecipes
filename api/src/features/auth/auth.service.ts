import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FirebaseAuthService } from '../../database/services/firebase-auth.service';
// @ts-ignore
import { catchError, map, Observable } from 'rxjs';
import { RegisterCredentials, SignInCredentials } from './auth.model';
import { User } from '@firebase/auth';
import { UserWithCredentials } from '../users/user.model';
import { UsersService } from '../users/users.service';
import { auth } from 'firebase-admin/lib/auth/auth-namespace';
import UserRecord = auth.UserRecord;

@Injectable()
export class AuthService {
  constructor(private readonly firebaseAuthService: FirebaseAuthService) {}

  signIn(
    signInCredentials: SignInCredentials,
  ): Observable<UserWithCredentials> {
    return this.firebaseAuthService.signIn(signInCredentials).pipe(
      map((user) => AuthService.parseToUserWithCredentials(user)),
      catchError(() => {
        throw new HttpException('Invalid credentials', HttpStatus.CONFLICT);
      }),
    );
  }

  register(
    registerCredentials: RegisterCredentials,
  ): Observable<UserWithCredentials> {
    return this.firebaseAuthService.register(registerCredentials).pipe(
      map((user) => AuthService.parseToUserWithCredentials(user)),
      catchError(() => {
        throw new HttpException('Invalid data', HttpStatus.CONFLICT);
      }),
    );
  }

  static parseToUserWithCredentials(
    user: User | UserRecord,
  ): UserWithCredentials {
    const { displayName, email, uid: id } = user;
    const baseUser = { displayName, email, id };

    if ('stsTokenManager' in user) {
      const { accessToken, refreshToken } = user['stsTokenManager'];
      return {
        ...baseUser,
        tokenCredentials: { accessToken, refreshToken },
      };
    }
    return baseUser;
  }
}
