import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipes.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'test recipe1', 
            'test1',
            'http://survival-mastery.com/wp-content/uploads/2015/03/Camping-Food-Idea-810x518.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 4)
            ]
        ),
        new Recipe(
            'test recipe2', 
            'test2', 
            'http://survival-mastery.com/wp-content/uploads/2015/03/Camping-Food-Idea-810x518.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 4)
            ]
        )
      ];
    
    getRecipes(){
        return this.recipes.slice();
    }
}