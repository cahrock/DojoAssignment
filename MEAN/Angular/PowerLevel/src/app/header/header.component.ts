import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Input() powerValue;
    @Output() updateHumans = new EventEmitter();
    power: number = 0;
    // @Output()
  constructor() { }

  ngOnInit() {
  }
  triggerEvent(){
      this.updateHumans.emit();
      console.log('click event works')
  }
  callParent(){
      this.updateHumans.emit();
  }
  calculate(){
      this.powerValue.emit();
  }

}
