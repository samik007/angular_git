import { Injectable } from "@angular/core";

import { Recipe } from "./recipes.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from "rxjs/internal/Subject";

@Injectable()
export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Chicken Roll', 
            'This is the description for chicken roll',
            'http://survival-mastery.com/wp-content/uploads/2015/03/Camping-Food-Idea-810x518.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 4)
            ]
        ),
        new Recipe(
            'Egg Roll', 
            'This is the description for egg roll',
            'http://survival-mastery.com/wp-content/uploads/2015/03/Camping-Food-Idea-810x518.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 4)
            ]
        )
      ];

    constructor(private slService: ShoppingListService){}  
    
    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addingredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}