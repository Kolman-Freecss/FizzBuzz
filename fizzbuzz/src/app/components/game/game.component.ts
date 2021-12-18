import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FizzBuzz, Operation, Player} from "../../model/model";
import {MenuPopoverComponent} from "../menu-popover/menu-popover.component";
import {AnimationController, ModalController, PopoverController} from "@ionic/angular";
import {ModalPageComponent} from "../modal-page/modal-page.component";
import {initAnimation} from "../../../assets/animations/gameAnimations";

const RELOAD_INTERVAL = 60;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnDestroy {

  gameDuration: number;
  player1: Player;
  player2: Player;
  fizzBuzzCounter = 1;
  operation = 0;
  gameOver = false;
  num1 = 0;
  num2 = 0;
  typeOperation: Operation;
  intervalGame: any;
  sumPointAnimationPlayer: any;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private popoverController: PopoverController,
    private modalController: ModalController,
    private animationController: AnimationController
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.gameDuration =  params.gameDuration * 2;
    });
    this.player1 = new Player('Gon', this.gameDuration, true);
    this.player2 = new Player('Killua', this.gameDuration, false);
    this.generateOperation(this.player1);

    this.sumPointAnimationPlayer = initAnimation('player-points-animation-wrapper', this.animationController);

    this.intervalGame = setInterval(() => {
      this.update();
    }, RELOAD_INTERVAL * 60);
  }

  update(): void {

    if (this.player1.turn) {
      this.player1.totalTime--;
    }
    else {
      this.player2.totalTime--;
    }
    if (this.gameDuration > 0 && this.player1.totalTime > 0
      && this.player2.totalTime > 0) this.gameDuration--;
    else {
      this.gameOver = true;
      this.presentModal();
      clearInterval(this.intervalGame);
    }
  }

  checkAnswer(event: number): void {
    const solution = this.typeOperation === Operation.SUM ? this.num1 + this.num2 :
              this.typeOperation === Operation.MULTIPLICATION ? this.num1 * this.num2 :
                this.num1 / this.num2;
    solution.toFixed(1);
    if (this.player1.turn) {
      this.sumPoints(event, this.player1, solution);
      this.generateOperation(this.player2);
    }
    else {
      this.sumPoints(event, this.player2, solution);
      this.generateOperation(this.player1);
    }
    this.sumPointAnimationPlayer.play();
    this.player1.changeTurn();
    this.player2.changeTurn();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPageComponent
    });
    return await modal.present();
  }

  async createPopover(ev: any) {
    const pop = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: ev,
      translucent: true
    });
    return await pop.present();
  }

  generateOperation(player: Player): void {
    switch (this.fizzBuzz(this.fizzBuzzCounter)) {
      case FizzBuzz.FIZZ: {
        this.typeOperation = Operation.MULTIPLICATION;
        player.exercise.question = this.generateMultiplication();
        break;
      }
      case FizzBuzz.BUZZ: {
        this.typeOperation = Operation.DIVISION;
        player.exercise.question = this.generateDivision();
        break;
      }
      default: {
        this.typeOperation = Operation.SUM;
        player.exercise.question = this.generateSum();
      }
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  displayFizzBuzz(vIn: number): string {
    const vOut = this.fizzBuzz(vIn);
    return vOut === FizzBuzz.FIZZ ? 'FIZZ' : vOut === FizzBuzz.BUZZ ? 'BUZZ' : String(vIn);
  }

  fizzBuzz(vIn: number): FizzBuzz {
    return vIn % 3  === 0 ? FizzBuzz.FIZZ : vIn % 5 === 0 ? FizzBuzz.BUZZ : FizzBuzz.NORMAL;
  }

  private sumPoints(answer: number, player: Player, solution: number) {
    if (answer === solution) {
      if (this.typeOperation === Operation.SUM) {
        player.points++;
      }
      else if (this.typeOperation === Operation.MULTIPLICATION) {
        player.points += 2;
        player.fizzCount++;
      }
      else {
        player.points += 3;
        player.buzzCount++;
      }
      this.fizzBuzzCounter++;
    }
  }

  private generateDivision(): string {
    this.num1 = Math.floor(Math.random() * (10));
    this.num2 = Math.floor(Math.random() * (10));
    return String(this.num1 + ' / ' + this.num2);
  }

  private generateMultiplication(): string {
    this.num1 = Math.floor(Math.random() * (20));
    this.num2 = Math.floor(Math.random() * (20));
    return String(this.num1 + ' x ' + this.num2);
  }

  private generateSum(): string {
    this.num1 = Math.floor(Math.random() * (1000));
    this.num2 = Math.floor(Math.random() * (1000));
    return String(this.num1 + ' + ' + this.num2);
  }

}
