import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeTile } from '../../shared/components/recipe-tile/recipe-tile.component';
import { selectPersonalRecipes } from '../../core/store/recipes/recipes.selectors';
import { filter, map } from 'rxjs/operators';
import { Recipe } from '../../core/models/recipes.model';
import { parseToRecipeTiles } from '../../core/utility/parse-to-recipe-tiles';
import { Store } from '@ngrx/store';
import { RootState } from '../../core/store/root.state';
import { GetPersonalRecipes } from '../../core/store/recipes/recipes.actions';

@Component({
  selector: 'app-personal-recipes',
  templateUrl: './personal-recipes.component.html',
  styleUrls: ['./personal-recipes.component.scss'],
})
export class PersonalRecipesComponent implements OnInit {
  recipes$: Observable<RecipeTile[]> = this.store
    .select(selectPersonalRecipes)
    .pipe(
      filter(Boolean),
      map((recipes: Recipe[]) =>
        recipes.map((recipe) => {
          const { authorName, ...recipeWithoutAuthorName } =
            parseToRecipeTiles(recipe);
          return recipeWithoutAuthorName;
        })
      )
    );
  constructor(private store: Store<RootState>) {}

  ngOnInit(): void {
    this.store.dispatch(GetPersonalRecipes());
  }
}
