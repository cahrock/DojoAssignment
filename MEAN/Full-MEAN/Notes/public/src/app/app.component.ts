import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import {QuoteService} from './quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Anynomous Notes';
  notes: any = []

  constructor(
    private quoteService: QuoteService,
    private router: Router) {
        this.quoteService.get()
        .then(notes => {this.notes = notes
        console.log(notes[notes.length-1])})
    }

  ngOnInit() {

  }
  note = {}
  add(){
      console.log("app component add")
      this.quoteService.create(this.note)
      .then( notes => this.notes= notes)
      .catch(err => console.log(err))
  }
}
