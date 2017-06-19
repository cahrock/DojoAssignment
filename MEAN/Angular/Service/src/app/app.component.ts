import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`
      <div>
            <label>Username:</label> <input #userName />
            <button (click)="getScore(userName.value); userName.value=''">
              Get Score
            </button> 
      </div>
      <div *ngIf="github_score">
        <h1>Your github score: {{github_score}}</h1>
        <div *ngIf="github_score < 20"><h2>Needs work!</h2></div>
        <div *ngIf="github_score >= 20 && github_score < 50" ><h2>A decent start!</h2></div>
        <div *ngIf="github_score >= 50 && github_score < 100"><h2>Doing good!</h2></div>
        <div *ngIf="github_score >= 100 && github_score < 200"><h2>Great jobk!</h2></div>
        <div *ngIf="github_score >= 200"><h2>Github elite!</h2></div>
      </div>

  `
})
export class AppComponent {
    title="Github scoring"
    tasks = [];
    github_score: number;

    constructor(private _httpService: HttpService){}
    getScore(user_name){
        this._httpService.retrieveGithubAPI(user_name)
        .then( tasks => {
            this.tasks = tasks;
            this.github_score = tasks.public_repos + tasks.followers;
            console.log(this.github_score)})
        .catch( err => { console.log(err); })
        ;

    }

    // scoring: number = this.tasks.public_repos + this.tasks.followers
}
