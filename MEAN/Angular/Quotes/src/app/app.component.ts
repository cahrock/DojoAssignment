import { Component } from '@angular/core';
import {Quotes} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote List';
  quotes: Array<Quotes> = []
  quote = new Quotes()

  // quotes =[]
  // quote ={
  //     id: "",
  //     content: '',
  //     author: ''
  // }

  onSubmit(){
      this.quotes.push(this.quote);
      this.quote = new Quotes()
  }
}
