import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {GameComponent} from './game.component';
import {GameRoutingModule} from "./game-routing.module";
import {MenuPopoverComponent} from "../menu-popover/menu-popover.component";
import {ModalPageComponent} from "../modal-page/modal-page.component";
import {PlayerModule} from "../player/player.module";


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, GameRoutingModule, PlayerModule],
  declarations: [GameComponent, MenuPopoverComponent, ModalPageComponent],
  exports: [GameComponent]
})
export class GameModule
{
}
