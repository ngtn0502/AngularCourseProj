import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../../shared/recipe.model';
import { Router } from '@angular/router';
import { DataStorageService } from './../../services/data-storage.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.scss'],
})
export class ReceipeListComponent implements OnInit {
  recipes: any[];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.dataStorageService.fetchData();

    this.recipeService.recipeChange.subscribe((data: Recipe[]) => {
      // console.log(data);

      this.recipes = data;
    });
  }
  onCreateNewRecipe() {
    this.router.navigate(['/recipes', 'new']);
  }
}
