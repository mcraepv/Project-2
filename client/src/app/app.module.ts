import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';
import { FrontPageJumbotronComponent } from './front-page-jumbotron/front-page-jumbotron.component';
import { FrontPageSearchBarComponent } from './front-page-search-bar/front-page-search-bar.component';
import { DrinksOfDayComponent } from './drinks-of-day/drinks-of-day.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignOutComponent } from './sign-out/sign-out.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { AdvancedSearchNavComponent } from './advanced-search-nav/advanced-search-nav.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeImgComponent } from './recipe-img/recipe-img.component';
import { RecipeTitleComponent } from './recipe-title/recipe-title.component';
import { RecipeStepsComponent } from './recipe-steps/recipe-steps.component';
import { RecipeExtraInfoComponent } from './recipe-extra-info/recipe-extra-info.component';
import { RecipeIngredientsInfoComponent } from './recipe-ingredients-info/recipe-ingredients-info.component';
import { RecipeNutritionModalComponent } from './recipe-nutrition-modal/recipe-nutrition-modal.component';
import { AboutComponent } from './about/about.component';
import { AboutDevsComponent } from './about-devs/about-devs.component';
import { AboutInfoComponent } from './about-info/about-info.component';
import { AboutTitleComponent } from './about-title/about-title.component';
import { AboutImgComponent } from './about-img/about-img.component';
import { AboutResourcesComponent } from './about-resources/about-resources.component';
import { UserFavoritesComponent } from './user-favorites/user-favorites.component';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { QueryService } from './query.service';
import { AuthService } from './auth.service';
import { ToastsComponent } from './toasts/toasts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    SignInComponent,
    SignInModalComponent,
    FrontPageJumbotronComponent,
    FrontPageSearchBarComponent,
    DrinksOfDayComponent,
    RegisterModalComponent,
    SignOutComponent,
    HomepageComponent,
    AdvancedSearchComponent,
    AdvancedSearchNavComponent,
    RecipeComponent,
    RecipeImgComponent,
    RecipeTitleComponent,
    RecipeStepsComponent,
    RecipeExtraInfoComponent,
    RecipeIngredientsInfoComponent,
    RecipeNutritionModalComponent,
    AboutComponent,
    AboutDevsComponent,
    AboutInfoComponent,
    AboutResourcesComponent,
    AboutImgComponent,
    AboutTitleComponent,
    UserFavoritesComponent,
    ToastsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    QueryService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
