import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PersonalRecipesComponent } from './personal-recipes/personal-recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { HomeComponent } from './home/home.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CoreModule } from '../core/core.module';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appEffects, appReducer } from '../core/store';
import { CookieService } from 'ngx-cookie-service';
import { RootState } from '../core/store/root.state';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../core/interceptors/auth-interceptor.service';
import { TokenValidation } from '../core/store/auth/auth.actions';
import { RecipeImageComponent } from './recipe-details/recipe-image/recipe-image.component';
import { isNotUndefined } from '../core/utility/is-not-undefined';
import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  declarations: [
    HomeComponent,
    RecipeListComponent,
    AddRecipeComponent,
    RecipeDetailsComponent,
    PersonalRecipesComponent,
    SignInComponent,
    SignUpComponent,
    RecipeImageComponent,
  ],
  imports: [
    StoreModule.forRoot(appReducer),
    StoreModule.forFeature('recipes', appReducer.recipe),
    EffectsModule.forRoot(appEffects),
    AdsenseModule.forRoot({
      adClient: 'ca-pub-7640562161899788',
      adSlot: 2930227358,
      fullWidthResponsive: true,
    }),
    SharedModule,
    CoreModule,
    FeaturesRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class FeaturesModule {
  constructor(
    private cookieService: CookieService,
    private store: Store<RootState>
  ) {
    const token = cookieService.get('token');

    if (isNotUndefined(token)) {
      this.store.dispatch(TokenValidation());
    }
  }
}
