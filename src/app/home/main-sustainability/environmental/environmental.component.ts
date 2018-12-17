import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-environmental',
  templateUrl: './environmental.component.html',
  styleUrls: ['./environmental.component.scss']
})
export class EnvironmentalComponent implements OnInit {

  heading =`Environmental`
  paragraphs = [`The Group’s environmental focus is centred on improving our environmental systems as well as
  proactively searching for environmentally sensitive methods of carrying out all aspects of our
  business. The conservation of natural resources is one of the key drivers in our decision making
  process while also providing opportunities for business growth. In order to fulfil these objectives The
  Titan Emporium is:`]
  
  
  list = [ `Continuously identifying and assessing environmental hazards with a view to implementing
  measures to mitigate or control`
  ,` Improving systems and training programmes to increase individual awareness levels of
  environmental issues, responsibilities and accountabilities`
  ,`  Identifying business opportunities within the environmental space.`
  ,` Establishing a waste recycling station to promote recycling`
  ,` Promoting the use of green products`
  ,` Sourcing environmentally friendly products or companies committed to
  environmental sustainability, where possible, in partnership with the procurement
  department.`,
  `To obtain the best results possible throughout the group the “green committee” was established.
  Members from each business unit provide contributions on focus areas such as:`
  ,` Implementation of the group’s integrated environmental strategy`
  ,` Roll-out of new electronic environmental system where and when necessary`
  ,` Implementing world best practice procedures and keeping up to date with current technology and
  ends`
  ,`  Raising awareness through the group`
  ,`  Implementing energy-saving and conservation programmes as well as driving our Carbon
  Disclosure Project and carbon footprint reduction initiatives.`,]
  
  constructor() { }

  ngOnInit() {
  }

}
