import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CurrencyService } from './service/currency/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'crypto-price-tracker';
  selectCurrency: string = "USD";

  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  constructor(private currencyService: CurrencyService, private observer: BreakpointObserver) {

  }
  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.observer.observe(['(max-width:787px)'])
      .subscribe((res) => {
        if (res?.matches) {
          this.sideNav.mode = 'over';
          this.sideNav.close();
        } else {
          this.sideNav.mode = 'side';
          this.sideNav.open();
        }
      })
  }

  sendCurrency(event: string) {
    console.log(event);
    this.currencyService.setCurrency(event);
  }
}
