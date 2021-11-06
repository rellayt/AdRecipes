import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Observable } from 'rxjs';
import { Recipe } from './recipes.model';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get() findAll(): Observable<Recipe[]> {
    return this.recipesService.findAll();
  }

  @Get(':id') findById(@Param() { id }): Observable<Recipe> {
    return this.recipesService.findById(id);
  }

  @Post() create(
    @Body() recipeData: Recipe,
    @Res() { locals },
  ): Observable<Recipe> {
    return this.recipesService.create(recipeData, locals.userId);
  }
}
