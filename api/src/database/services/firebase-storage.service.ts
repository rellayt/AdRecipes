import { Injectable } from '@nestjs/common';
// @ts-ignore
import { from, map, Observable, of, switchMap, tap } from 'rxjs';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { FirebaseStorage } from '@firebase/storage';

@Injectable()
export class FirebaseStorageService {
  constructor() {}

  private static get storage(): FirebaseStorage {
    return getStorage();
  }

  uploadFile(fileBuffer: Buffer, fileName: string): Observable<string> {
    const storageRef = ref(
      FirebaseStorageService.storage,
      `recipe_images/${fileName}.png`,
    );
    return from(uploadBytes(storageRef, fileBuffer)).pipe(
      switchMap(() => getDownloadURL(storageRef)),
    );
  }
}
