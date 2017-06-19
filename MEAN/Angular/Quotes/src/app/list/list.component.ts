import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    @Input() quotes;
    count: number = 0;

    countPlus(quote){
        quote.count ++;
    }
    countNeg(quote){

            quote.count --;
        
    }
    onClick(i){

            this.quotes.splice(i, 1)


    }

  constructor() { }

  ngOnInit() {
  }

}
