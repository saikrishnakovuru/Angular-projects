import {Component} from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  public selectedRecipe: Recipe;

  public recipeSelected(recipe: Recipe): void {
    // console.log(recipe);
    this.selectedRecipe = recipe;
  }
}
