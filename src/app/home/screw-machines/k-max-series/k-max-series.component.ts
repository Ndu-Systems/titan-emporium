import { Component, OnInit } from '@angular/core';
import { FiniScrew } from '../models';
import { ActivatedRoute } from '@angular/router';
import { FINI_SCREW_DATA } from '../data';

@Component({
  selector: 'app-k-max-series',
  templateUrl: './k-max-series.component.html',
  styleUrls: ['./k-max-series.component.scss']
})
export class KMaxSeriesComponent implements OnInit {
  kmaxProduct: FiniScrew[];
  productId: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => { this.productId = p.id; });
    this.getkmaxProducts();
  }

  getkmaxProducts() {
    this.kmaxProduct = FINI_SCREW_DATA.filter(p => p.id === this.productId);
  }

}
