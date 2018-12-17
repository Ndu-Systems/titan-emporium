import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-governance',
  templateUrl: './governance.component.html',
  styleUrls: ['./governance.component.scss']
})
export class GovernanceComponent implements OnInit {
  heading =` Governance`;
  paragraphs = [`The Titan Emporium subscribes to the principles of good governance and
  complies with all relevant laws and regulations.`,
  `Authority, responsibility and accountability for the group’s ethics, performance and
  sustainability is held at Exco level, which the board formally delegates to the Director
  and in turn to his direct reports and sequentially throughout the organisation.`,
  `The leaders of The Titan are mindful that entrepreneurial creativity and
  responsiveness is a competitive advantage and every effort is made to integrate
  governance processes in the least bureaucratic way possible.`
  ]
  constructor() { }

  ngOnInit() {
  }

}
