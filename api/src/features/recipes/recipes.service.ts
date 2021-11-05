import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../../database/services/firebase.service';
import { Recipe } from './recipes.model';
// @ts-ignore
import { map, Observable, switchMap } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { UsersService } from '../users/users.service';
import { UserInformation } from '../../base/models/userId.model';

@Injectable()
export class RecipesService {
  constructor(
    private readonly firebaseService: FirebaseService<Recipe>,
    private usersService: UsersService,
  ) {}

  private getUserInformationSource(
    id = 'z8lNVDziAKNZVo1ZUIIs9MLdSCQ2',
  ): Observable<UserInformation> {
    return this.usersService
      .findById(id)
      .pipe(map(({ uid: userId, displayName }) => ({ userId, displayName })));
  }

  create(recipe: Recipe, userId?: string): Observable<Recipe> {
    const recipeToCreate = {
      id: uuid(),
      createdAt: new Date().toString(),
      ...recipe,
    };

    return this.getUserInformationSource(userId).pipe(
      switchMap((userInformation) =>
        this.firebaseService.create({ ...userInformation, ...recipeToCreate }),
      ),
    );
  }

  findById(id: string): Observable<any> {
    return this.firebaseService.findById(id);
  }

  findAll(): Observable<Recipe[]> {
    return this.firebaseService.findAll();
  }
}
