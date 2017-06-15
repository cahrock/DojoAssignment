import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  timeNow: number = Date.now();
  timeNew = this.timeNow;
  todayp = new Date()
  today: number = this.todayp.getHours()
  // timeZone: number = timeNow - 0800;

}
