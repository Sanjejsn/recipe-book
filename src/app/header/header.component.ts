import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data-storage.service';
import { RecipeService } from '../recipes/recipe.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: DataService, private recipeService: RecipeService) { }

  ngOnInit() {

  }

  onSave() {
    this.dataService.saveData()
      .subscribe((response) => console.log(response));
  }

  onFetch() {
    this.dataService.getData();

  }


}
