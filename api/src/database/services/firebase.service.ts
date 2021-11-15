import { Inject, Injectable } from '@nestjs/common';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';
// @ts-ignore
import { from, map, Observable, of, switchMap, tap } from 'rxjs';
import { firestore } from 'firebase-admin/lib/firestore/firestore-namespace';
import { FirebaseAuthAdmin } from './firebase-auth-admin.abstract';
import QueryDocumentSnapshot = firestore.QueryDocumentSnapshot;
import CollectionReference = firestore.CollectionReference;
import DocumentData = firestore.DocumentData;
import { firstElement } from '../../base/utils/first-element';

@Injectable()
export class FirebaseService<T> extends FirebaseAuthAdmin {
  private get collection(): CollectionReference<DocumentData> {
    return this.fireStore.collection(this.collectionName);
  }

  constructor(
    @InjectFirebaseAdmin() firebaseAdmin: FirebaseAdmin,
    @Inject('collectionName') private collectionName: string,
  ) {
    super(firebaseAdmin);
  }

  create(item: T): Observable<T> {
    return from(this.collection.add(item)).pipe(
      switchMap((documentReference) => documentReference.get()),
      map((snapshot) => snapshot.data() as T),
    );
  }

  findAll(): Observable<T[]> {
    return from(this.collection.get()).pipe(
      map(({ docs }) => this.parseDocumentsToGenericData(docs)),
    );
  }

  findById(id: string): Observable<T> {
    const query = this.collection.where('id', '==', id).get();
    return from(query).pipe(
      map(
        (querySnapshot) =>
          firstElement<DocumentData>(querySnapshot.docs).data() as T,
      ),
    );
  }

  private parseDocumentsToGenericData(
    documents: QueryDocumentSnapshot<DocumentData>[],
  ): T[] {
    return documents.map((document) => document.data() as T);
  }
}
