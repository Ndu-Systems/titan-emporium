import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policies-and-disclosures',
  templateUrl: './policies-and-disclosures.component.html',
  styleUrls: ['./policies-and-disclosures.component.scss']
})
export class PoliciesAndDisclosuresComponent implements OnInit {
heading ="Policies and disclosures";
paragraphs = [`comming soon`]
bg="";
list=[];

  constructor() { }

  ngOnInit() {
  }

}
