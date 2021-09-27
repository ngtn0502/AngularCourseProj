import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  checkID: boolean = false;

  constructor(private ActivatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params: Params) => {
      this.checkID = !!params.id;
    });
  }
}
