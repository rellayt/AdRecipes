import { Injectable } from '@nestjs/common';
import { FirebaseAuthAdmin } from '../../database/services/firebase-auth-admin.abstract';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';
// @ts-ignore
import { from, map, Observable, of, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { UserWithCredentials } from './user.model';

@Injectable()
export class UsersService extends FirebaseAuthAdmin {
  constructor(@InjectFirebaseAdmin() firebaseAdmin: FirebaseAdmin) {
    super(firebaseAdmin);
  }

  findById(id: string): Observable<UserWithCredentials> {
    return from(this.firebaseAdminAuth.getUser(id)).pipe(
      map((userRecord) => AuthService.parseToUserWithCredentials(userRecord)),
    );
  }
}
