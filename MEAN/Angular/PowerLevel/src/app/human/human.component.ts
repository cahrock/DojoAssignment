import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Human} from "@app/human/human";

@Component({
  selector: 'app-human',

  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {
    @Input() name;
    @Input() power;
    human : Human;
  constructor() { }

  ngOnInit() {
      this.human = new Human(this.power, this.name);
  }
  ngOnChanges(changes){

  }

}
