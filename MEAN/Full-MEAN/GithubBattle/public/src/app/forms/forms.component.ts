import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
    user: any={};
    user1: any={};
    user2: any={};
    username = '';
    users:any = [];

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
  }

  getUser1(user_name){
      this._githubService.get(user_name)
    //   .then(user => {
    //       this.users.push(user)
    //       console.log(this.user)
    //   })
    //   .catch(err => {console.log(err)})
    .then( user => {
        this.users = users;
        // this.github_score = tasks.public_repos + tasks.followers;
        console.log(this.github_score)})
    .catch( err => { console.log(err); })

  }

  getUser2(user_name){
      this._githubService.get(user_name)
      .then(user => {
          this.users.push(user)
          console.log(this.user)
      })
      .catch(err => {console.log(err)})
  }

}
