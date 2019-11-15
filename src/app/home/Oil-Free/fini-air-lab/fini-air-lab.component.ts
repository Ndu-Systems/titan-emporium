import { Component, OnInit } from '@angular/core';
import { OilFree } from '../models';
import { OIL_FREE_DATA } from '../data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fini-air-lab',
  templateUrl: './fini-air-lab.component.html',
  styleUrls: ['./fini-air-lab.component.scss']
})
export class FiniAirLabComponent implements OnInit {

  airLabProduct: OilFree[];
  productId: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => { this.productId = p.id; });
    this.airLabProduct = OIL_FREE_DATA.filter(o => o.id === this.productId);
  }

}
