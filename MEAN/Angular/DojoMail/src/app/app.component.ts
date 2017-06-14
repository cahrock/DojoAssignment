import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';

  users: Array<any> = [
      {
          email: 'Bill@gates.com',
          importance: true,
          subject: 'New Windows',
          content: 'Windows XI will launch in year 2100'
      },
      {
          email: 'Steve@Jobs.com',
          importance: true,
          subject: 'Apple Hollogram',
          content: 'Apple game console releases in 2050'
      },
      {
          email: 'John@Carmac.com',
          importance: false,
          subject: 'Updated Algo',
          content: 'New Algorith for shadow volumes'
      },
      {
          email: 'gabe@newel.com',
          importance: false,
          subject: 'HL3',
          content: 'Just kidding!'
      }
  ];

  // test: Array<any> = [
  //     one: {
  //         email: 'Bill@gates.com',
  //         importance: 'High',
  //         subject: 'New Windows',
  //         content: 'Windows XI will launch in year 2100'
  //     },
  //     two: {
  //         email: 'Steve@Jobs.com',
  //         importance: 'High',
  //         subject: 'Apple Hollogram',
  //         content: 'Apple game console releases in 2050'
  //     },
  // ]
}
