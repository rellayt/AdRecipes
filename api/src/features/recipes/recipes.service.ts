import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../../database/services/firebase.service';
import { Recipe } from './recipes.model';
// @ts-ignore
import { map, Observable, switchMap } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { UsersService } from '../users/users.service';
import { UserInformation } from '../../base/models/userId.model';
import { FirebaseStorageService } from '../../database/services/firebase-storage.service';

@Injectable()
export class RecipesService {
  constructor(
    private readonly firebaseService: FirebaseService<Recipe>,
    private readonly firebaseStorageService: FirebaseStorageService,
    private usersService: UsersService,
  ) {}

  private getUserInformationSource(id): Observable<UserInformation> {
    return this.usersService.findById(id).pipe(
      map(({ id: userId, displayName }) => ({
        userId,
        authorName: displayName,
      })),
    );
  }

  create(
    recipe: Recipe,
    userId: string,
    file: Express.Multer.File,
  ): Observable<Recipe> | any {
    const recipeId = uuid();
    const recipeToCreate = {
      id: recipeId,
      createdAt: new Date().toString(),
      ...recipe,
    };
    return this.firebaseStorageService.uploadFile(file.buffer, recipeId).pipe(
      switchMap((photoUrl) => {
        recipeToCreate.photoUrl = photoUrl;
        return this.getUserInformationSource(userId);
      }),
      switchMap((userInformation) =>
        this.firebaseService.create({ ...userInformation, ...recipeToCreate }),
      ),
    );
  }

  findById(id: string): Observable<Recipe> {
    return this.firebaseService.findById(id);
  }

  findAll(): Observable<Recipe[]> {
    return this.firebaseService.findAll();
  }
}
