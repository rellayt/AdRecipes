import { Injectable } from '@nestjs/common';
import { FirebaseAuthAdmin } from '../../database/services/firebase-auth-admin.abstract';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';
import { from, Observable } from 'rxjs';
import { UserRecord } from 'firebase-admin/lib/auth';
import { User } from './user.model';

@Injectable()
export class UsersService extends FirebaseAuthAdmin {
  constructor(@InjectFirebaseAdmin() firebaseAdmin: FirebaseAdmin) {
    super(firebaseAdmin);
  }

  findById(id: string): Observable<any> {
    return from(this.firebaseAdminAuth.getUser(id));
  }

  // serialize(user: UserRecord): User {
  //
  // }
}
