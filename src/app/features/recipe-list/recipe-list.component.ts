import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeTile } from '../../shared/components/recipe-tile/recipe-tile.component';
import { selectAllRecipes } from '../../core/store/recipes/recipes.selectors';
import { filter, map } from 'rxjs/operators';
import { Recipe } from '../../core/models/recipes.model';
import { parseToRecipeTiles } from '../../core/utility/parse-to-recipe-tiles';
import { Store } from '@ngrx/store';
import { RootState } from '../../core/store/root.state';
import { GetAllRecipes } from '../../core/store/recipes/recipes.actions';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes$: Observable<RecipeTile[]> = this.store.select(selectAllRecipes).pipe(
    filter(Boolean),
    map((recipes: Recipe[]) =>
      recipes.map((recipe) => parseToRecipeTiles(recipe))
    )
  );
  constructor(private store: Store<RootState>) {}

  ngOnInit(): void {
    this.store.dispatch(GetAllRecipes());
  }
}
