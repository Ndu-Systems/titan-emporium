import { Component, OnInit } from '@angular/core';
import { FiniScrew } from '../models';
import { ActivatedRoute } from '@angular/router';
import { FINI_SCREW_DATA } from '../data';

@Component({
  selector: 'app-vision-series',
  templateUrl: './vision-series.component.html',
  styleUrls: ['./vision-series.component.scss']
})
export class VisionSeriesComponent implements OnInit {
  visionProduct: FiniScrew[];
  productId: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => { this.productId = p.id; });
    this.getFiniScrewProducts();
  }

  getFiniScrewProducts() {
    this.visionProduct = FINI_SCREW_DATA.filter(p => p.id === this.productId);
  }

}
