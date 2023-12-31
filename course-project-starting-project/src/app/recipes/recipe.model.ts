import {Ingredient} from "../shared/ingredient.model";

export class Recipe {
    // public name: string;
    // public description: string;
    // public imagePath: string;

    constructor(private name: string, private description: string, private imagePath: string, private ingredients: Ingredient[]) {
        // this.name = name;
        // this.description = description;
        // this.imagePath = imagePath;
    }


    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;

    }

    public getImagePath(): string {
        return this.imagePath;
    }

    public getIngredients(): Ingredient[] {
        return this.ingredients;
    }


}