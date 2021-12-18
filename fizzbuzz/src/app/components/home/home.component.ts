import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GAME_PATH} from "../../utils/paths";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  gameDuration = 0;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {

  }

  onSubmit(): void {
    this.router.navigate([GAME_PATH, this.gameDuration]);
  }

}
