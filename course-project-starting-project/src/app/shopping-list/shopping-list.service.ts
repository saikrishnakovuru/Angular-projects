import {Ingredient} from "../shared/ingredient.model";

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Onion', 3),
        new Ingredient('tomato', 2)
    ];

    public getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addNewIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    addNewIngredientsToShoppingList(ingredients: Ingredient[]): void {
        this.ingredients.push(...ingredients);
    }
}