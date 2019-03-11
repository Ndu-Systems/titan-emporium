import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  showMobleMenu: boolean = false;
  images: any[];
  constructor() {}

  ngOnInit() {
    this.images = [];
        this.images.push({source:'assets/slide/1.jpg', alt:'Image 1', title:''});
        this.images.push({source:'assets/slide/2.jpg', alt:'Image 2', title:''});
        this.images.push({source:'assets/slide/3.jpg', alt:'Image 3', title:''});
        this.images.push({source:'assets/slide/4.jpg', alt:'Image 3', title:''});
        this.images.push({source:'assets/slide/5.jpg', alt:'Image 3', title:''});
        this.images.push({source:'assets/slide/6.jpg', alt:'Image 3', title:''});
        this.images.push({source:'assets/slide/7.jpg', alt:'Image 3', title:''});
  }
 
}
