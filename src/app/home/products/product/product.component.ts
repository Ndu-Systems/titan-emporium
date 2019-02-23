import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../models/product.model";
import { products } from "../data/products";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
 
  productId: string;
  product:Product;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(r => {
      this.productId = r["id"];
      this.getProduct();
    });
  }

  ngOnInit() {}
  getProduct(): any {
    let p:Array<Product> =products.filter(x=>x.id==this.productId);
    if(p.length){
      this.product =p[0];
    }
  }
}
