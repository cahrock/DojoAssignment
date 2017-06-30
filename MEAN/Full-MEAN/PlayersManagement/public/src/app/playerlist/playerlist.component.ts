import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})
export class PlayerlistComponent implements OnInit {
    players: any;
  constructor(
      private _playerService: PlayerService
  ) {
      this._playerService.getAll()
      .then((data)=> {
          console.log("back inside list component")
          console.log(data)
          this.players = data
      })
      .catch((err)=> console.log(err))
  }

  ngOnInit() {
  }

  deletePlayer(id, index){
      console.log("User id" + id)
      this._playerService.delete(id)
      .then((data)=>{
          // this getAll()
          var index = this.players.indexOf(data);
          console.log(index)
          this.players.splice(index, 1)
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  getAll(){
      this._playerService.getAll()
      .then((data)=>{
          console.log("back inside getAll() component")
          console.log(data)
          this.players = data
      })
      .catch((err)=>{
          console.log(err)
      })
  }

}
