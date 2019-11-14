import { Component, OnInit } from '@angular/core';
import { OilFree } from '../models';
import { ActivatedRoute } from '@angular/router';
import { OIL_FREE_DATA } from '../data';

@Component({
  selector: 'app-fini-medicair',
  templateUrl: './fini-medicair.component.html',
  styleUrls: ['./fini-medicair.component.scss']
})
export class FiniMedicairComponent implements OnInit {
  medicairProduct: OilFree[];
  productId: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => { this.productId = p.id; });
    this.medicairProduct = OIL_FREE_DATA.filter(o => o.id === this.productId);
  }

}
