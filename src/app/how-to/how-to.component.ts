import { Component, OnInit } from '@angular/core';
import { pageTransition } from '../animations';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.scss'],
  animations:[ pageTransition ]
})
export class HowToComponent implements OnInit {

  state : string ='in';
  constructor() { }

  ngOnInit() {
    this.state = this.state === 'in'? 'out' : 'in';
  }

}
