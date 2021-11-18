import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { selectAllRecipes } from '../../core/store/recipes/recipes.selectors';
import { filter, map } from 'rxjs/operators';
import { Recipe } from '../../core/models/recipes.model';
import { parseToRecipeTiles } from '../../core/utility/parse-to-recipe-tiles';
import { Store } from '@ngrx/store';
import { RootState } from '../../core/store/root.state';
import { GetAllRecipes } from '../../core/store/recipes/recipes.actions';
import { RecipeTile } from '../../shared/components/recipe-tile/recipe-tile.component';
import { isNotUndefined } from '../../core/utility/is-not-undefined';
import { Ad } from '../../core/models/ad';
import { parseToRecipesWithAds } from '../../core/utility/parse-to-recipes-with-ads';
import { RecipeTileOrAd } from '../../core/types/recipe-tile-or-ad';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes$: Observable<RecipeTileOrAd[]> = this.store
    .select(selectAllRecipes)
    .pipe(
      filter(Boolean),
      map((recipes: Recipe[]) =>
        recipes.map((recipe) => parseToRecipeTiles(recipe))
      ),
      map((recipes: RecipeTile[]) => {
        console.log(parseToRecipesWithAds(recipes));
        return parseToRecipesWithAds(recipes);
      })
    );

  constructor(private store: Store<RootState>) {}

  checkIfItIsAd(value: Ad | RecipeTile): value is Ad {
    return isNotUndefined((<Ad>value).isAd);
  }

  ngOnInit(): void {
    this.store.dispatch(GetAllRecipes());
  }
}
