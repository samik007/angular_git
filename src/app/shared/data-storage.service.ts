import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from '../recipes/recipes.model';

@Injectable()
export class DataStorageService{
    constructor(private http: Http,
                    private recipeService: RecipeService) {}

    storeRecipes(){
        return this.http
        .put('https://myfirstfirebaseprj-be5e9.firebaseio.com/recipes.json', 
            this.recipeService.getRecipes());
    }

    getRecipes(){
        this.http
        .get('https://myfirstfirebaseprj-be5e9.firebaseio.com/recipes.json')
        .subscribe(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}