import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-our-approach",
  templateUrl: "./our-approach.component.html",
  styleUrls: ["./our-approach.component.scss"]
})
export class OurApproachComponent implements OnInit {
  paragraphs = [
    `As a company, we believe in delivering tangible benefits 
    to all our stakeholders. Our mission has and is always
     been to provide innovative, value-adding solutions by 
     exceeding expectations. `,
     `Our approach is entrenched in the value set
      that has built the foundation and the successes
       of The Titan Emporium. This is at the heart 
       of the Value Based Management approach,
      which centers on long-term, positive outcomes 
      for those that interact with the organization.`,
      ` At The Emporium we’re proud to inspire some of
       the most incredible employees who go above and beyond 
       the call of duty. Through perseverance, commitment
        and innovative thinking, we are able to make a world of difference.
      `
  ];
  heading = "Our Approach";
  bg="optimizze.svg"
  constructor() {}

  ngOnInit() {}
}
