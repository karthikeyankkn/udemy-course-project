import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

	recipes: Recipe[] = [
		new Recipe("test recipe 1", "test recipe description", "https://sweetcsdesigns.com/wp-content/uploads/2018/01/Best-Baked-Pork-Tenderloin-Picture.jpg"),
		new Recipe("test recipe 2", "test recipe description", "https://cdn.pixabay.com/photo/2016/01/14/17/46/eat-1140371_960_720.jpg")
	];
	
	

  constructor() { }

  ngOnInit() {
  }

}
