import { User } from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tasks';
  upperText = 'Display uppercase test.';
  lowerText = 'Display lowercase test.';
  percentValue = 0.5;
  date: Date = new Date();
  money = 12500;
  user: User = {
    name: 'Alef',
    age: 25
  };
}
