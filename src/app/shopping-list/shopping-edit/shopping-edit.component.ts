import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput')nameInputRef: ElementRef;
  @ViewChild('amountInput')amountInputRef: ElementRef;
  @Output() ingAdded = new EventEmitter<any>()
  
  
  constructor() { }

  ngOnInit() {
  }

  addName(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient (ingName, ingAmount);
    this.ingAdded.emit(newIngredient);
    };
  }


