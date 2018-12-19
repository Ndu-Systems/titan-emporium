import { Component, OnInit } from '@angular/core';
import { TextModel } from '../../../models/body.text.model';

@Component({
  selector: 'app-food-beverage',
  templateUrl: './food-beverage.component.html',
  styleUrls: ['./food-beverage.component.scss']
})
export class FoodBeverageComponent implements OnInit {
  heading = 'AIR COMPRESSORS FOR THE FOOD AND BEVERAGE INDUSTRY';
  bg="food.png";
  list=[];
  paragraphs=[
    `The quality of compressed air used in the food industry is of upmost importance as even the
    slightest traces of contamination can result in altered or polluted product batches and the risk of
    hazards for consumers.`,
    `To ensure best practice, the International Standards Organisation (ISO) established a new class
    of air quality for sensitive industries such as food and beverage. Known as Class 0, it is the most
    stringent air quality class, limiting oil contamination in liquids, aerosols and vapours.`
  ];
  multiList:Array<TextModel> = [
    {
      heading:'AIR PURIFICATION EQUIPMENT FOR THE FOOD INDUSTRY',
      paragraphs:[
        `Compressed air purification equipment is essential in the food and beverage industry where air
        purity and integrity of product is essential. It must deliver uncompromising performance and
        reliability with the right balance of air quality and cost of operation.`,
        `The Tian Emporium can offer a comprehensive range of purification equipment available to
        exactly match your requirements, ensuring both initial capital and operational costs are kept to a
        minimum. These products include:`,
        ,`-Filters`
,`-Water Separators`
,`-Adsorption dryers`
,`-Refrigerated dryers`
      ]
    },
    {
      heading:'KEEPING YOUR COMPRESSED AIR CLEAN',
      paragraphs:[
        `Independent of any type of compressor, there are 6 main sources of contamination to be fund in a
compressed air system which need to be purified to protect products and processes:`,
,`-Water vapour, condensed water and water aerosols`
,`-Atmospheric dirt`
,`-Micro organisms`
,`-Rust and pipe corrosion`
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
