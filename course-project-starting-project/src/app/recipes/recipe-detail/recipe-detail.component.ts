import {Component, Input} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

class Ingredients {
}

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  @Input()
  public recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {
  }

  public onAddToShoppingList(): void {
    this.shoppingListService.addNewIngredientsToShoppingList(this.recipe.getIngredients());
  }
}
