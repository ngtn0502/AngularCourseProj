import { Ingredients } from './ingredients.model';

export class Recipe {
  public name: string;
  public description: string;
  public imgPath: string;
  public ingredients: Ingredients[];

  constructor(
    name: string,
    desc: string,
    path: string,
    ingredients?: Ingredients[],
    id?: number
  ) {
    this.name = name;
    this.description = desc;
    this.imgPath = path;
    this.ingredients = ingredients;
  }
}
