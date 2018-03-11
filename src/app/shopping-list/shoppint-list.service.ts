import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomates', 10)
  ];

  ingredientsChange = new EventEmitter<Ingredient[]>();

  add(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.emitListChangeEvent();
  }

  addAll(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.emitListChangeEvent();
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  private emitListChangeEvent() {
    this.ingredientsChange.emit(this.getIngredients());
  }
}
