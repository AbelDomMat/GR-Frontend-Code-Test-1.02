import { Component, OnInit } from '@angular/core';
import { Bet } from './bet';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./../styles.scss']
})
export class AppComponent implements OnInit {
  title = 'GR-Frontend-Code-Test-EN-1.02';
  moneybet: number = 0;
  moneybetbox: number = 0;
  betsnum: Bet[] = [];
  betsbutton: Bet[] = [];
  rand: number = 0;
  lottery: boolean = false;
  result: Bet = new Bet('0', 'grey');
  resulttxt: string = '';
  resultcss: string = '';
  badbet: boolean = false;

  ngOnInit(): void {
    this.clearSelect();
  }

  clearSelect() {
    this.betsnum = [];
    this.betsbutton = [];
    this.moneybet = 0;
    this.moneybetbox = 0;
    this.badbet = false;

    // Ini numbers
    this.betsbutton.push(new Bet('1', 'numbutton backdarkred'));
    this.betsbutton.push(new Bet('2', 'numbutton backlightorange'));
    this.betsbutton.push(new Bet('3', 'numbutton backdarkgreen'));
    this.betsbutton.push(new Bet('4', 'numbutton backlightred'));
    this.betsbutton.push(new Bet('5', 'numbutton backdarkorange'));
    this.betsbutton.push(new Bet('6', 'numbutton backlightgreen'));
    this.betsbutton.push(new Bet('7', 'numbutton backdarkred'));
    this.betsbutton.push(new Bet('8', 'numbutton backlightorange'));
    this.betsbutton.push(new Bet('9', 'numbutton backdarkgreen'));
    this.betsbutton.push(new Bet('10', 'numbutton backlightred'));

    // Ini bets selection
    this.betsnum.push(new Bet('', 'betnum backgrey'));
    this.betsnum.push(new Bet('', 'betnum backgrey'));
    this.betsnum.push(new Bet('', 'betnum backgrey'));
    this.betsnum.push(new Bet('', 'betnum backgrey'));
    this.betsnum.push(new Bet('', 'betnum backgrey'));
    this.betsnum.push(new Bet('', 'betnum backgrey'));
    this.betsnum.push(new Bet('', 'betnum backgrey'));
    this.betsnum.push(new Bet('', 'betnum backgrey'));
  }

  addNumber(num: string, color: string) {
    this.betsnum.shift();
    color = color.replace('numbutton', 'betnum');
    this.betsnum.push(new Bet(num, color));
  }

  startbet() {
    if (this.moneybetbox == 0) {
      this.badbet = true;
    } else {
      this.badbet = false;
      this.moneybet = this.moneybet + (this.moneybetbox * 5);
    }
  }

  startlottery() {
    if (this.moneybet == 0) {
      this.badbet = true;
    } else {
      this.badbet = false;
      this.rand = Math.floor((Math.random() * 8) + 1);
      this.result = this.betsbutton.filter(x => x.number == this.rand.toString())[0];
      if (this.betsnum.filter(x => x.number == this.result.number.toString())[0] != null) {
        this.moneybet = this.moneybet * 1.5;
        this.resulttxt = 'YOU WON ' + this.moneybet + '€';
        this.resultcss = 'textgreen';
      } else {
        this.resulttxt = 'YOU LOST';
        this.resultcss = 'textred';
        this.moneybet = 0;
      }
      this.lottery = true;
    }
  }
}
