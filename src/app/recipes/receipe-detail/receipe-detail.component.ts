import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Recipe } from '../../shared/recipe.model';
import { Ingredients } from './../../shared/ingredients.model';
import { DataStorageService } from './../../services/data-storage.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.scss'],
})
export class ReceipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params) => {
      this.dataStorageService.fetchData();
      this.recipeService.recipeChange.subscribe((data) => {
        this.recipe = data[params.id];
      });
    });
  }

  onAddRecipe() {
    this.recipeService.addIngredients(this.recipe.ingredients);
    this.router.navigate(['/shopping-list']);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.ActivatedRoute });
  }

  onDeleteRecipe() {
    const id = this.ActivatedRoute.snapshot.params.id;
    this.dataStorageService.deleteData(id);
    this.recipe = null;
  }
}
