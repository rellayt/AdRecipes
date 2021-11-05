import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FirebaseAuthService } from '../../database/services/firebase-auth.service';
// @ts-ignore
import { catchError, Observable } from 'rxjs';
import { RegisterCredentials, SignInCredentials } from './auth.model';

@Injectable()
export class AuthService {
  constructor(private readonly firebaseAuthService: FirebaseAuthService) {}

  signIn(signInCredentials: SignInCredentials): any {
    return this.firebaseAuthService.signIn(signInCredentials).pipe(
      catchError(() => {
        throw new HttpException('Invalid credentials', HttpStatus.CONFLICT);
      }),
    );
  }

  register(registerCredentials: RegisterCredentials): Observable<any> {
    return this.firebaseAuthService.register(registerCredentials).pipe(
      catchError(() => {
        throw new HttpException('Invalid data', HttpStatus.CONFLICT);
      }),
    );
  }
}
