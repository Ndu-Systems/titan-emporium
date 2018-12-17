import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.scss']
})
export class SafetyComponent implements OnInit {

  heading =`Safety`
  paragraphs = [`At The Titan Emporium we are committed to our mission of delivering safe,
  profitable projects and services. Our aim is to proactively reduce the
  frequency and severity of injuries. In addition to complying with safety
  regulations and entrenching the necessary systems, we also promote
  individual responsibility for safety throughout the organization`]
  constructor() { }

  ngOnInit() {
  }

}
