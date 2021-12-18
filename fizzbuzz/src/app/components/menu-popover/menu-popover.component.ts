import { Component, OnInit } from '@angular/core';
import {PopoverController} from "@ionic/angular";

@Component({
  selector: 'app-menu-popover',
  templateUrl: './menu-popover.component.html',
  styleUrls: ['./menu-popover.component.scss'],
})
export class MenuPopoverComponent implements OnInit {

  constructor(
    public popOverController: PopoverController
  ) { }

  ngOnInit() {}

  dismiss() {
    this.popOverController.dismiss({
      'dismissed': true
    });
  }

}
