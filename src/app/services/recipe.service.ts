import { EventEmitter, Injectable, Output } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { Ingredients } from './../shared/ingredients.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { DataStorageService } from './data-storage.service';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [new Ingredients('Meat', 1), new Ingredients('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [new Ingredients('Buns', 2), new Ingredients('Meat', 1)]
    ),
  ];

  recipeChange = new Subject<any>();

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  getRecipe() {
    console.log(this.recipes);

    return this.recipes.slice();
  }

  setFetchedRecipe(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChange.next(this.recipes.slice());
  }

  getRecipeByID(id: number): Recipe {
    return this.recipes.slice()[id];
  }

  addIngredients(ingredients: Ingredients[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  // deleteRecipe(id: string) {
  //   const newRecipe = this.recipes.slice();
  //   newRecipe.splice(+id, 1);
  //   console.log(newRecipe);

  //   this.recipeChange.next(newRecipe.slice());
  // }
}
