import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FirebaseAuthService } from '../../database/services/firebase-auth.service';
// @ts-ignore
import { catchError, map, Observable } from 'rxjs';
import { RegisterCredentials, SignInCredentials } from './auth.model';
import { User } from '@firebase/auth';
import { UserWithCredentials } from '../users/user.model';

@Injectable()
export class AuthService {
  constructor(private readonly firebaseAuthService: FirebaseAuthService) {}

  signIn(
    signInCredentials: SignInCredentials,
  ): Observable<UserWithCredentials> {
    return this.firebaseAuthService.signIn(signInCredentials).pipe(
      map((user) => this.parseToUserWithCredentials(user)),
      catchError(() => {
        throw new HttpException('Invalid credentials', HttpStatus.CONFLICT);
      }),
    );
  }

  register(
    registerCredentials: RegisterCredentials,
  ): Observable<UserWithCredentials> {
    return this.firebaseAuthService.register(registerCredentials).pipe(
      map((user) => this.parseToUserWithCredentials(user)),
      catchError(() => {
        throw new HttpException('Invalid data', HttpStatus.CONFLICT);
      }),
    );
  }

  parseToUserWithCredentials(user: User): UserWithCredentials {
    const { displayName, email, uid: id } = user;
    const { accessToken, refreshToken } = user['stsTokenManager'];
    return {
      displayName,
      email,
      id,
      tokenCredentials: { accessToken, refreshToken },
    };
  }
}
