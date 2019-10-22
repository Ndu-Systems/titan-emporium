import { FINI_SCREW_DATA } from './data/fini-screw.data';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FiniScrew } from './models';

@Component({
  selector: 'app-screw-machines',
  templateUrl: './screw-machines.component.html',
  styleUrls: ['./screw-machines.component.scss']
})
export class ScrewMachinesComponent implements OnInit {
  productId: string;
  FiniScrewProduct: FiniScrew[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => { this.productId = p.id; });
    this.getFiniScrewProducts();
   }

  getFiniScrewProducts() {
    this.FiniScrewProduct = FINI_SCREW_DATA.filter(p => p.id === this.productId);
  }



}
