import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FirebaseAuthAdmin } from '../../database/services/firebase-auth-admin.abstract';
// @ts-ignore
import { catchError, from, map, Observable } from 'rxjs';

@Injectable()
export class JwtTokenService extends FirebaseAuthAdmin {
  verifyTokenAndReturnUserId(token: string): Observable<string> {
    return from(this.firebaseAdminAuth.verifyIdToken(token)).pipe(
      map(({ uid }) => uid),
      catchError(() => {
        throw new HttpException('Invalid token', HttpStatus.CONFLICT);
      }),
    );
  }
}
