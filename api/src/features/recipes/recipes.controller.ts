import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Observable } from 'rxjs';
import { Recipe } from './recipes.model';
import { UsersService } from '../users/users.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get() findAll(): Observable<Recipe[]> {
    return this.recipesService.findAll();
  }

  @Get(':id') findById(@Param() { id }) {
    return this.recipesService.findById(id);
  }

  @Post() create(@Body() recipeData: Recipe): Observable<Recipe> {
    console.log('recipes');
    return this.recipesService.create(recipeData);
  }
}
