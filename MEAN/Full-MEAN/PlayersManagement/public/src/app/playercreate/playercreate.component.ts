import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playercreate',
  templateUrl: './playercreate.component.html',
  styleUrls: ['./playercreate.component.css']
})
export class PlayercreateComponent implements OnInit {
    player = {name:"", position:""}
  constructor(
      private _playerService: PlayerService,
      private _router: Router
  ) { }

  ngOnInit() {
  }
  createPlayer(){
      console.log(this.player);
      this._playerService.create(this.player)
      .then((data)=>{
          console.log('got back inside the component')
          console.log(data)
          this._router.navigateByUrl('/players/list')
      })
      .catch((err)=> {
          console.log(err)
      })
  }
}
