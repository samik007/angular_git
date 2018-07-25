import { Component, OnInit } from '@angular/core';
import { AgWordCloudData } from 'angular4-word-cloud';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit {
  wordData: AgWordCloudData[
    
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
