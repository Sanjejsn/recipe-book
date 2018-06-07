import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {


    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    saveData() {
        return this.http.put('https://udemy-ng-http-8d52a.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getData() {
        this.http.get<Recipe[]>('https://udemy-ng-http-8d52a.firebaseio.com/recipes.json')
            .map(recipes => {
                for (const recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            })
            .subscribe((response) => { this.recipeService.setRecipes(response); });
    }
}
