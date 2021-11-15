import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';
import FirebaseAdminAuth = auth.Auth;
import { auth } from 'firebase-admin/lib/auth/auth-namespace';
import { firestore } from 'firebase-admin/lib/firestore/firestore-namespace';
import Firestore = firestore.Firestore;
import Storage = firebaseAdmin.storage.Storage;
import * as firebaseAdmin from 'firebase-admin';

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

  protected get storage(): Storage {
    return this.firebaseAdmin.storage;
  }
}
