import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductFini, fini_array } from 'src/app/home/products/data/fini.data';

@Component({
  selector: 'app-fini-product-lay-out',
  templateUrl: './fini-product-lay-out.component.html',
  styleUrls: ['./fini-product-lay-out.component.scss']
})
export class FiniProductLayOutComponent implements OnInit {

  productId: string;
  product: ProductFini[];
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(r => {
      this.productId = r['id'];
      this.getProduct();
    });
  }

  ngOnInit() { }
  getProduct(): any {
    let p: Array<ProductFini> = fini_array.filter(x => x.id === this.productId);
    if (p.length) {
      this.product = p;
    }
  }
}
