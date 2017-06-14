import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';

  color: Array<string> = ['yellow', 'red', 'blue','Aqua', 'Gray', 'Crimson','DarkCyan', 'DarkMagenta', 'LemonChiffon', 'Maroon', 'Navy', 'steelblue'];


  a: number = (Math.floor(Math.random()*12))+1;
  b: number = (Math.floor(Math.random()*12))+1;
  c: number = (Math.floor(Math.random()*12))+1;
  d: number = (Math.floor(Math.random()*12))+1;
  e: number = (Math.floor(Math.random()*12))+1;
  f: number = (Math.floor(Math.random()*12))+1;
  g: number = (Math.floor(Math.random()*12))+1;
  h: number = (Math.floor(Math.random()*12))+1;
  i: number = (Math.floor(Math.random()*12))+1;



}
