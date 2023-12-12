import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('Chicken Biryani', 'Chicken Dum Biryani with dalcha', "https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__700_0_0_0_auto.jpg"),
        new Recipe('Mutton Biryani', 'Mutton Biryani with perugu chatni', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-zN2ohHlAN8FCJKTv_V7ycvtDSoDLT2oWg&usqp=CAU")
    ];


    @Output()
    public recipeWasSelected = new EventEmitter<Recipe>();

    public selectedRecipe(recipe: Recipe): void {
        this.recipeWasSelected.emit(recipe);
    }
}
