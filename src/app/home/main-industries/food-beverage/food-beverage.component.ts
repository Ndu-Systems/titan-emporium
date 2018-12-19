import { Component, OnInit } from '@angular/core';
import { TextModel } from '../../../models/body.text.model';

@Component({
  selector: 'app-food-beverage',
  templateUrl: './food-beverage.component.html',
  styleUrls: ['./food-beverage.component.scss']
})
export class FoodBeverageComponent implements OnInit {
  heading = 'AIR COMPRESSORS FOR THE FOOD AND BEVERAGE INDUSTRY';
  bg="";
  list=[];
  paragraphs;
  multiList:Array<TextModel> = [];
  constructor() { }

  ngOnInit() {
  }

}
