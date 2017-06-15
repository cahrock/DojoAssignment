import { Component } from '@angular/core';
import { User } from './user';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';

  user: any = new User();
  // user: any= {
  //     first_name:""
  // }
  users = [];
  onSubmit(){
      this.users=['Your user info']
    this.users.push(this.user);
    this.user = new User();
    // this.user= {
    //      first_name:"",
    //  }
  }

}
