import {Component} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('Chicken Biryani', 'Chicken Dum Biryani with dalcha', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLjulBMunMAom9YN1Ypxl6Mqf0tVe8rDWOQ&usqp=CAU"),
        new Recipe('Mutton Biryani', 'Mutton Biryani with perugu chatni', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLjulBMunMAom9YN1Ypxl6Mqf0tVe8rDWOQ&usqp=CAU")
    ];
    protected readonly Recipe = Recipe;
}
