import { Component, OnInit } from '@angular/core';
import { OIL_FREE_DATA } from '../data';
import { ActivatedRoute } from '@angular/router';
import { OilFree } from '../models';

@Component({
  selector: 'app-oil-free-pet',
  templateUrl: './oil-free-pet.component.html',
  styleUrls: ['./oil-free-pet.component.scss']
})
export class OilFreePetComponent implements OnInit {

  oilFreePetProduct: OilFree[];
  productId: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => { this.productId = p.id; });
    this.oilFreePetProduct = OIL_FREE_DATA.filter(o => o.id === this.productId);
  }
}
