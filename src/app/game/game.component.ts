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
  private subscription: Subscription;
  private timer: Observable<any>;

  ngOnInit() {
    this.setTimer();
  }

  public setTimer() {
    this.showLoader = true;
    this.timer = Observable.timer(3000);
    this.subscription = this.timer.subscribe(() => {
      this.showLoader = false;
    });
  }
}
