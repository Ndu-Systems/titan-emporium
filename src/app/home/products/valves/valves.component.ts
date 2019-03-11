import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Valve } from '../models/valve.model.';
import { valves } from '../data/valves';

@Component({
  selector: 'app-valves',
  templateUrl: './valves.component.html',
  styleUrls: ['./valves.component.scss']
})
export class ValvesComponent implements OnInit {

  productId: string;
  product:Valve[];
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(r => {
      this.productId = r["id"];
      this.getProduct();
    });
  }

  ngOnInit() {}
  getProduct(): any {
    let p:Array<Valve> =valves.filter(x=>x.id==this.productId);
    if(p.length){
      this.product =p;
    }
  }
}
