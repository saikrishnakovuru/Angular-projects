import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Chicken Biryani',
            'Chicken Dum Biryani with dalcha',
            "https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__700_0_0_0_auto.jpg",
            [new Ingredient("chicken", 2), new Ingredient("Coke", 4)]
        ),
        new Recipe('Mutton Biryani',
            'Mutton Biryani with perugu chatni',
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-zN2ohHlAN8FCJKTv_V7ycvtDSoDLT2oWg&usqp=CAU",
            [new Ingredient("Mutton", 1), new Ingredient("Pepsi", 4)]
        )
    ];

    public recipeSelected = new EventEmitter<Recipe>();

    public getRecipes(): Recipe[] {
        return this.recipes.slice();
    }
}