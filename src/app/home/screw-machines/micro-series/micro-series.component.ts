import { Component, OnInit, Input } from '@angular/core';
import { FiniScrew } from '../models';
import { FINI_SCREW_DATA } from '../data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-micro-series',
  templateUrl: './micro-series.component.html',
  styleUrls: ['./micro-series.component.scss']
})
export class MicroSeriesComponent implements OnInit {
 FiniScrewProduct: FiniScrew[];
 productId: string;

 constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => { this.productId = p.id; });
    this.getFiniScrewProducts();
  }

  getFiniScrewProducts() {
    this.FiniScrewProduct = FINI_SCREW_DATA.filter(p => p.id === this.productId);
  }
}
