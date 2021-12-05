import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Sinigang', 'Filipino food', 'https://images.summitmedia-digital.com/yummyph/images/2020/03/10/KNRR_0069.png'),
    new Recipe('Sinigang', 'Filipino food', 'https://images.summitmedia-digital.com/yummyph/images/2020/03/10/KNRR_0069.png'),
  ]; //array of recipes
  constructor() { }

  ngOnInit(): void {
  }

}
