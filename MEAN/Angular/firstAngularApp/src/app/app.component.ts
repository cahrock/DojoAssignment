import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  x: number = 7;
  y: number = 5;
  myStr: string = "abc";

  name = 'Jason Bourne';
  user = {
      firstName: 'Matt',
      lastName: 'Damon'
  }
  myBoolean = true;
  myArray = [1,2,3,4,5];
}
