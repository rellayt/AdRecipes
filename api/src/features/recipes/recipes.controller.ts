import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Observable } from 'rxjs';
import { Recipe } from './recipes.model';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get() findAll(): Observable<Recipe[]> {
    return this.recipesService.findAll();
  }

  @Get(':id') findById(@Param() { id }): Observable<Recipe> {
    return this.recipesService.findById(id);
  }

  @Post() @UseInterceptors(FilesInterceptor('image')) create(
    @Body() recipeData: Recipe,
    @Res({ passthrough: true }) { locals },
    @UploadedFiles() file: Express.Multer.File,
  ): Observable<Recipe> | null {
    recipeData.preparingSteps = JSON.parse(recipeData.preparingSteps as string);
    return this.recipesService.create(recipeData, locals.userId, file[0]);
  }
}
