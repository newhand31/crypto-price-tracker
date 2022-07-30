import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crypto-price-tracker';
  selectCurrency: string = "NTD";
  constructor() {

  }

  sendCurrency(event: string) {
    console.log(event);
  }
}
