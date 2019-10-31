import { Component, OnInit, Input } from '@angular/core';
import { FiniScrew } from '../models';
import { FINI_SCREW_DATA } from '../data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plus-series',
  templateUrl: './plus-series.component.html',
  styleUrls: ['./plus-series.component.scss']
})
export class PlusSeriesComponent implements OnInit {
 plusProduct: FiniScrew[];
 productId: string;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => { this.productId = p.id; });
    this.getPlusProducts();

  }
  getPlusProducts() {
    this.plusProduct = FINI_SCREW_DATA.filter(p => p.id === this.productId);
  }
}
