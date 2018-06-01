import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';



export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  constructor() { }

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Pasta',
      'Healthy!',
      'http://www.nationalpastaday.com/uploads/1/0/8/5/10858300/1588941_orig.jpg',
      [
        new Ingredient("Pasta", 1),
        new Ingredient("Tomatoes", 4)
      ]),
    new Recipe(
      'Hamburger',
      'Everything you need!',
      `https://png.pngtree.com/element_origin_min_pic/16/11/20/15c60a58fae57263a20937951f1841ef.jpg`,
      [
        new Ingredient("Meat", 1),
        new Ingredient("Buns", 2)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteItem(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }


}
