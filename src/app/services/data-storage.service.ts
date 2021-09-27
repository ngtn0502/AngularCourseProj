import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from '../shared/recipe.model';
import { Data, Router } from '@angular/router';

const apiURL = 'https://project-e8993-default-rtdb.firebaseio.com/recipe.json';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  postData() {
    this.http.put(apiURL, this.recipeService.getRecipe()).subscribe((data) => {
      //   console.log(data);
    });
  }

  postSingleRecipe(recipe: Recipe) {
    this.http.post(apiURL, recipe).subscribe((data) => {
      //   console.log(data);
      this.fetchData();
    });
  }

  fetchData() {
    return this.http
      .get<Recipe[]>(apiURL)
      .pipe(
        map((data) => {
          const newArray = [];
          for (const key in data) {
            newArray.push(data[key]);
          }
          return newArray.map((item) => {
            return { ...item, ingredients: item.ingredients || [] };
          });
        })
      )
      .subscribe((data) => {
        this.recipeService.setFetchedRecipe(data);
      });
  }

  deleteData(id: number) {
    const newRecipe = this.recipeService.getRecipe().slice();
    newRecipe.splice(+id, 1);
    this.http.put(apiURL, newRecipe).subscribe((data) => {
      //   console.log(data);
    });
    this.recipeService.setFetchedRecipe(newRecipe);
  }
}
