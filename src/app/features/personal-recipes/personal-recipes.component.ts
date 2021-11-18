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
import { Ad } from '../../core/models/ad';
import { isNotUndefined } from '../../core/utility/is-not-undefined';
import { parseToRecipesWithAds } from '../../core/utility/parse-to-recipes-with-ads';
import { RecipeTileOrAd } from '../../core/types/recipe-tile-or-ad';

@Component({
  selector: 'app-personal-recipes',
  templateUrl: './personal-recipes.component.html',
  styleUrls: ['./personal-recipes.component.scss'],
})
export class PersonalRecipesComponent implements OnInit {
  recipes$: Observable<RecipeTileOrAd[]> = this.store
    .select(selectPersonalRecipes)
    .pipe(
      filter(Boolean),
      map((recipes: Recipe[]) =>
        recipes.map((recipe) => {
          const { authorName, ...recipeWithoutAuthorName } =
            parseToRecipeTiles(recipe);
          return recipeWithoutAuthorName;
        })
      ),
      map((recipes: RecipeTile[]) => parseToRecipesWithAds(recipes))
    );

  constructor(private store: Store<RootState>) {}

  checkIfItIsAd(value: Ad | RecipeTile): value is Ad {
    return isNotUndefined((<Ad>value).isAd);
  }

  ngOnInit(): void {
    this.store.dispatch(GetPersonalRecipes());
  }
}
