import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fini_info_array, ProductInfoFini } from 'src/app/home/products/data/fini-info.data';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {


  productId: string;
  images: any[] = [];
  product: ProductInfoFini[];
  tableSpec: string;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(r => {
      this.productId = r['id'];
      this.getProduct();
    });
  }

  ngOnInit() { }
  getProduct(): any {
    const p: Array<ProductInfoFini> = fini_info_array.filter(x => x.id === this.productId);
    if (p.length) {
      this.product = p;
      this.product[0].images.forEach(x => {
        this.images.push({
          source: x, alt: '', title: ''
        });
      });

      this.tableSpec = `for ${this.product[0].heading}`;
    }
  }

}
