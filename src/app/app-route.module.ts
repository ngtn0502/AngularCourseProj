import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReceipeItemComponent } from './recipes/receipe-list/receipe-item/receipe-item.component';
import { ReceipeDetailComponent } from './recipes/receipe-detail/receipe-detail.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { ResolverService } from './services/resolver.service';

const appRoutes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipesStartComponent,
      },
      {
        path: 'new',
        component: RecipesEditComponent,
      },
      {
        path: ':id',
        component: ReceipeDetailComponent,
        resolve: { recipe: ResolverService },
      },

      {
        path: ':id/edit',
        component: RecipesEditComponent,
      },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutes {}
