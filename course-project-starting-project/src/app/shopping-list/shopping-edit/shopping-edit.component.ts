import {Component, EventEmitter, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @Output()
  public nameAndAmount = new EventEmitter<Ingredient>();

  public onAddNameAndMount(nameInput: HTMLInputElement, amountInput: HTMLInputElement): void {
    this.nameAndAmount.emit(new Ingredient(nameInput.value, parseFloat(amountInput.value)));
  }
}
