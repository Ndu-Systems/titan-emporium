import { Component, OnInit } from '@angular/core';
import { FiniScrew } from '../models';
import { ActivatedRoute } from '@angular/router';
import { FINI_SCREW_DATA } from '../data';

@Component({
  selector: 'app-plus-vs-series',
  templateUrl: './plus-vs-series.component.html',
  styleUrls: ['./plus-vs-series.component.scss']
})
export class PlusVsSeriesComponent implements OnInit {
  plusProduct: FiniScrew[];
  productId: string;

  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(p => { this.productId = p.id; });
    this.getFiniScrewProducts();
  }
  getFiniScrewProducts() {
    this.plusProduct = FINI_SCREW_DATA.filter(p => p.id === this.productId);
  }

}
