import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Operation, Player} from "../../model/model";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit
{

  @Input() player: Player;
  @Input() typeOperation: Operation;
  @Input() gameOver: boolean;
  @Output() playerAnswer = new EventEmitter<number>();

  constructor()
  {
  }

  ngOnInit()
  {
  }

  emitAnswer() {
    this.playerAnswer.emit(this.player.exercise.answer);
  }

}
