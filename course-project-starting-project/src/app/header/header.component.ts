import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output()
  public recipeHeader = new EventEmitter<string>();


  public onClickingRecipes(): void {
    this.recipeHeader.emit('recipe');
  }

  public onClickingShoppingList(): void {
    this.recipeHeader.emit('shoppingList');
  }
}
