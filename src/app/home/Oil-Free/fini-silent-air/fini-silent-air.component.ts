import { Component, OnInit } from '@angular/core';
import { OilFree } from '../models';
import { ActivatedRoute } from '@angular/router';
import { OIL_FREE_DATA } from '../data';

@Component({
  selector: 'app-fini-silent-air',
  templateUrl: './fini-silent-air.component.html',
  styleUrls: ['./fini-silent-air.component.scss']
})
export class FiniSilentAirComponent implements OnInit {
  silentairProduct: OilFree[];
  productId: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => { this.productId = p.id; });
    this.silentairProduct = OIL_FREE_DATA.filter(o => o.id === this.productId);
  }
}
