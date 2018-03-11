import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shoppint-list.service';
@Injectable()
export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[];

  constructor(private shoppingListService: ShoppingListService) {
    this.recipes = [
      new Recipe('Pizza',
        'Pizza with mozzarella',
        'http://www.yaelyspizza.com/wp-content/uploads/2017/06/' +
        'buffets-familiares-en-cdmx-carne-pizza-y-videojuegos-02.jpg',
        [
          new Ingredient('mozzarella', 2),
          new Ingredient('pizza bread', 1)
        ]),
      new Recipe('Chicken with vegs',
        'Chicken with vegetables on pressure cooker',
        'http://www.seriouseats.com/images/2015/09/' +
        '20150914-pressure-cooker-recipes-roundup-09.jpg', [
          new Ingredient('chicken', 1),
          new Ingredient('pepper', 2),
          new Ingredient('potato', 3),
          new Ingredient('stock', 1)
        ])
    ];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.getRecipes()[index];
  }

  addRecipeToShoppingList(recipe: Recipe) {
    this.shoppingListService.addAll(recipe.ingredients);
  }
}
