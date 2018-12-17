import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chemical',
  templateUrl: './chemical.component.html',
  styleUrls: ['./chemical.component.scss']
})
export class ChemicalComponent implements OnInit {
heading = `Chemical Industry`
paragraphs = [
  `
  In the chemical industry, high quality, oil-free, constant pressure air is required. In this industry,
  as toxic, corrosive and unstable products are often part of the sophisticated production processes,
  the compressed air frequently comes into contact with these products. Impurities in the
  compressed air can therefore lead to an expensive production scrap or even to a halt in
  production. Our high-quality compressed air treatment equipment and strict quality controls
  ensure that manufacturers supply their customers with high quality chemicals and chemical
  products.`
];
  constructor() { }

  ngOnInit() {
  }

}
