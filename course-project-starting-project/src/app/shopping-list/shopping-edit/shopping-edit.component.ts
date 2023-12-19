import {Component, EventEmitter, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  constructor(private shoppingListService: ShoppingListService) {
  }

  public onAddNameAndMount(nameInput: HTMLInputElement, amountInput: HTMLInputElement): void {
    this.shoppingListService.addNewIngredient(new Ingredient(nameInput.value, parseFloat(amountInput.value)));
  }
}
