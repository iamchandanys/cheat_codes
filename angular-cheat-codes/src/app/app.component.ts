import { Component } from '@angular/core';
import { Demo1 } from './cheat-codes/demo-1';
import { Demo2 } from './cheat-codes/demo-2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-cheat-codes';

  constructor() {
    // const demo1 = new Demo1();
    // demo1.getData();

    const demo2 = new Demo2();
  }
}
