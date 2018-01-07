import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeListItemSelected: EventEmitter<Recipe> = new EventEmitter();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.bbcgoodfood.com/sites/default/files/styles/' +
      'carousel_medium/public/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg' +
      '?itok=naGPMoRQ'),
    new Recipe('Another Test Recipe', 'This is simply another test', 'http://www.seriouseats.com/images/2015/09/' +
      '20150914-pressure-cooker-recipes-roundup-09.jpg')
  ];

  constructor() {
  }

  recipeSelected(recipe: Recipe) {
    this.recipeListItemSelected.emit(recipe);
  }

  ngOnInit() {
  }

}
