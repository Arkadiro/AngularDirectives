import { Component } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  odd = this.numbers.filter(el=>el % 2 !== 0)
  even = this.numbers.filter(el=>el % 2 == 0);
  //evenNew = this.numbers.map((el)=>el*2);
  onlyOdd = false;
  value = 10;
}
