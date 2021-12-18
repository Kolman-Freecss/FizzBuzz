export class Player {
  name: string;
  fizzCount: number;
  buzzCount: number;
  points: number;
  totalTime: number;
  turn: boolean;
  exercise: Exercise;

  constructor(name: string, totalTime?: number, turn?: boolean) {
    this.name = name;
    this.fizzCount = 0;
    this.buzzCount = 0;
    this.points = 0;
    this.totalTime = totalTime;
    this.turn = turn;
    this.exercise = new Exercise();
  }

  changeTurn(): void {
    this.turn = !this.turn;
  }
}

export class Exercise {
  answer: number;
  question: string;

  constructor() {
    this.answer = 0;
    this.question = '';
  }
}

export enum FizzBuzz {
  FIZZ,
  BUZZ,
  NORMAL
}

export enum Operation {
  MULTIPLICATION,
  DIVISION,
  SUM
}
