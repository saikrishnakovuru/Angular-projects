import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input()
  public recipe: Recipe;
  @Output()
  public selectedRecipe = new EventEmitter<void>();

  public onSelected(): void {
    this.selectedRecipe.emit();
  }
}
