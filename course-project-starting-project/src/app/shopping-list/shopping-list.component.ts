import {Component} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {

    public ingredients: Ingredient[] = [
        new Ingredient('Onion', 3),
        new Ingredient('tomato', 2)
    ];

    public nameAndAmount(nameAndAmount: Ingredient): void {
        this.ingredients.push(new Ingredient(nameAndAmount.getName(), nameAndAmount.getAmount()));
    }
}
