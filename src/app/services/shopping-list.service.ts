import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import { RecipeService } from './recipe.service';

@Injectable()
export class ShoppingListService {
  ingredientsChange = new Subject<Ingredients[]>();

  private ingredients: Ingredients[] = [
    new Ingredients('Apple', 5),
    new Ingredients('Tomato', 2),
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addItem(ingredients: Ingredients) {
    this.ingredients.push(ingredients);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
  }
}
