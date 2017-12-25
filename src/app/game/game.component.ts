import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  private showLoader = true;
  private showPresenterText = false;
  private showGameTitleText = false;
  private subscription: Subscription;
  private spinnerTimer: Observable<any>;
  private presenterTimer: Observable<any>;
  private gameTitleTimer: Observable<any>;

  ngOnInit() {
    this.setTimer();
  }

  public setTimer() {
    this.showLoader = true;
    this.spinnerTimer = Observable.timer(3000);

    this.spinnerTimer.subscribe(() => {
      this.showLoader = false;
      this.showPresenterText = true;
      this.presenterTimer = Observable.timer(5000);

      this.presenterTimer.subscribe(() => {
        this.showPresenterText = false;
        this.showGameTitleText = true;
        this.gameTitleTimer = Observable.timer(5000);

        this.gameTitleTimer.subscribe(() => {
          this.showGameTitleText = false;
        });
      });
    });
  }
}
