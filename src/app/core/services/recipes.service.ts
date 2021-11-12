import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { HttpPostMethodOptions } from '../models/HttpMethods.model';
import { Recipe, RecipeEntry } from '../models/recipes.model';
import { map } from 'rxjs/operators';

@Injectable()
export class RecipesService {
  constructor(private apiService: ApiService<Recipe | unknown>) {}

  create(recipe: RecipeEntry, image: Blob): Observable<Recipe | unknown> {
    const formData = new FormData();
    formData.append('image', image);

    Object.entries(recipe).forEach(([key, value]) =>
      formData.append(key, value)
    );

    const payload: HttpPostMethodOptions<Recipe | unknown> = {
      body: formData,
    };
    return this.apiService.post(`recipes`, payload) as Observable<Recipe>;
  }

  get(): Observable<Recipe[] | unknown> {
    return this.apiService.get(`recipes`).pipe(
      map((recipes: Recipe[]) =>
        recipes.map((recipe) => ({
          ...recipe,
          createdAt: new Date(recipe.createdAt),
        }))
      )
    );
  }

  findById(id: string): Observable<Recipe | unknown> {
    return this.apiService.get(`recipes/${id}`).pipe(
      map((recipe: Recipe) => ({
        ...recipe,
        createdAt: new Date(recipe.createdAt),
      }))
    );
  }
}
