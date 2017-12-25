import { Component, OnInit } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent {
  title = 'Dungeon Escape';
  isLoading = true;

  loaded() {
    this.isLoading = false;
  }
}
