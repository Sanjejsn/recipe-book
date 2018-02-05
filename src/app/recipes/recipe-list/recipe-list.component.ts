import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe ("test", "this is just a test","https://media.gettyimages.com/photos/pumpkin-salad-picture-id635912088"),
    new Recipe ("Another test", "this is just a test","https://media.gettyimages.com/photos/pumpkin-salad-picture-id635912088")
  ];
@Output() recipeWasSelected = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
