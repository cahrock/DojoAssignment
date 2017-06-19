import { Component, Input, Output, EventEmitter } from '@angular/core';
import {PowerLevel}  from "./PoweLevel";
import {NgForm}  from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
    humans: Array<string> = ["Human",'Saiyan', 'Super Saiyan One', 'Super Saiyan Two', 'Super Saiyan Three', 'Super Saiyan Four'];
    power: number = 0;
    updateChild(power){
        this.power = power;
        console.log('update child')
    }



    powerValue = [];
    level = new PowerLevel();
    title = 'app';

    invoked(){
        this.powerValue.push(this.level)
        // this.level = new PowerLevel()
        console.log(this.powerValue[this.powerValue.length-1])
    }
}
