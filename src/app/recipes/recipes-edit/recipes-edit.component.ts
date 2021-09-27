import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from 'src/app/shared/recipe.model';
import { DataStorageService } from './../../services/data-storage.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.scss'],
})
export class RecipesEditComponent implements OnInit {
  id: number;
  editMode: boolean;

  dataForm: FormGroup;
  recipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    // Reactive Form

    // Handle edit
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.editMode = !!params.id;
      this.recipe = this.recipeService.getRecipeByID(this.id);
      console.log(this.recipe);
      this.dataForm = new FormGroup({
        name: new FormControl(this.recipe?.name),
        desc: new FormControl(this.recipe?.description),
        imgPath: new FormControl(this.recipe?.imgPath),
      });
    });
  }

  // this.dataForm.value.name = this.recipe.name;
  // this.dataForm.value.desc = this.recipe.description;
  // this.dataForm.value.imgPath = this.recipe.imgPath;

  onSubmit() {
    const recipe = new Recipe(
      this.dataForm.value.name,
      this.dataForm.value.desc,
      this.dataForm.value.imgPath,
      null
    );
    this.dataStorageService.postSingleRecipe(recipe);
    this.dataForm.reset();
  }
}
