import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { RecipesService } from './services/recipes.service';

@NgModule({
  imports: [CommonModule],
  providers: [ApiService, AuthService, RecipesService],
})
export class CoreModule {}
