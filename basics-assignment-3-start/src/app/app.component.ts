import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .overFive {
      color: white;
    }
  `]
})
export class AppComponent {
  displayStatus: boolean = false;
  log = []
  switchDisplay () {
    this.displayStatus = !this.displayStatus;
    this.log.push(new Date());
  }
  getColor(i) {
    return i > 4 ? "blue" : "transparent";
  }
}
