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

  constructor() { }

  ngOnInit() {
  }

}
