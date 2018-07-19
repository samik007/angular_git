import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSeleted = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('test recipe1', 'test1', 'http://survival-mastery.com/wp-content/uploads/2015/03/Camping-Food-Idea-810x518.jpg'),
    new Recipe('test recipe2', 'test2', 'http://survival-mastery.com/wp-content/uploads/2015/03/Camping-Food-Idea-810x518.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSeleted.emit(recipe);
  }

}
