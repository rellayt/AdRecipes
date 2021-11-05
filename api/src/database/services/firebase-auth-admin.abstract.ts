import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';
import FirebaseAdminAuth = auth.Auth;
import { auth } from 'firebase-admin/lib/auth/auth-namespace';
import { firestore } from 'firebase-admin/lib/firestore/firestore-namespace';
import Firestore = firestore.Firestore;

export abstract class FirebaseAuthAdmin {
  constructor(
    @InjectFirebaseAdmin() private readonly firebaseAdmin: FirebaseAdmin,
  ) {}

  protected get firebaseAdminAuth(): FirebaseAdminAuth {
    return this.firebaseAdmin.auth;
  }

  protected get fireStore(): Firestore {
    return this.firebaseAdmin.db;
  }
}
