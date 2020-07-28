import { Cocktail } from './models/cocktail';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ingredient } from './ingredient';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Drink } from './drink';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  //FINAL QUERIES for heroku deploy
  //================================
  // ingredientURL = 'api/ingredient';
  // cocktailURL = 'api/results/';
  // advancedSearchURL = 'api/advanced-search';
  // randomURL = 'api/random';
  // initAdvancedURL = 'api/cocktail';
  // cocktailSearchURL = 'api/cocktail-search/';
  // userFavoritesURL = 'api/favorites/';
  // favoriteURL = 'api/favorite/';
  //==============================================

  nutritionURL =
    'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=vhvEbrN6AYcz02VcLyMWAbIG6qhOQngRIPjqz5Ia&query=';

  //TEST QUERIES
  //=========================================
  ingredientURL = 'http://localhost:3000/api/ingredient';
  cocktailURL = 'http://localhost:3000/api/results/';
  advancedSearchURL = 'http://localhost:3000/api/advanced-search';
  randomURL = 'http://localhost:3000/api/random';
  initAdvancedURL = 'http://localhost:3000/api/cocktail';
  cocktailSearchURL = 'http://localhost:3000/api/cocktail-search/';
  userFavoritesURL = 'http://localhost:3000/api/favorites/';
  favoriteURL = 'http://localhost:3000/api/favorite/';

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.ingredientURL).pipe(
      tap((x) => {}),
      catchError(this.handleError<Ingredient[]>('getIngredients', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getCocktail(cocktailName: String): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(`${this.cocktailURL}${cocktailName}`).pipe(
      tap((x) => {
        console.log(x);
      })
    );
  }

  getNutritionFacts(cocktailName: String): Observable<any> {
    return this.http.get<any[]>(`${this.nutritionURL}${cocktailName}`);
  }

  advancedSearch(searchArr: Array<number>): Observable<Drink[]> {
    const customURL = `${this.advancedSearchURL}/${searchArr.toString()}`;
    return this.http.get<any>(customURL).pipe(
      tap((x) => {
        x.length
          ? console.log('Found drinks')
          : console.log("didn't find drinks");
      }),
      catchError(this.handleError<Drink[]>('advancedSearch', []))
    );
  }

  initAdvanced(): Observable<Drink[]> {
    return this.http.get<any>(this.initAdvancedURL).pipe(
      tap((x) => {
        console.log(x);
      }),
      catchError(this.handleError<Drink[]>('advancedSearch', []))
    );
  }

  getRandom(): Observable<Drink[]> {
    return this.http.get<any>(this.randomURL).pipe(
      tap((x) => {
        console.log(x);
      }),
      catchError(this.handleError<Drink[]>('randomSearch', []))
    );
  }

  getFavorites(username: String): Observable<any> {
    const token = localStorage.getItem('id_token');
    const header = { headers: new HttpHeaders({ Authentication: token }) };
    return this.http.get<any>(`${this.userFavoritesURL}${username}`, header);
  }

  getLikely(term: string): Observable<Drink[]> {
    console.log('getLikely');
    return this.http
      .get<any>(`${this.cocktailSearchURL}${term}`)
      .pipe(tap((x) => {}));
  }

  addFavorite(cocktailID: number, userID: number) {
    const reqObj = {
      userID: userID,
      cocktailID: cocktailID,
    };
    console.log(reqObj);
    this.http
      .post<any>(this.favoriteURL, reqObj, this.httpOptions)
      .subscribe((res) => {
        console.log('it worked');
      });
  }
}
