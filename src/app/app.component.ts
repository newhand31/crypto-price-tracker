import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
// import { nextTick } from 'process';
import { CurrencyService } from './service/currency/currency.service';
import { NewsService } from './service/news/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'crypto-price-tracker';
  selectCurrency: string = "USD";

  public sources: any = [];
  public articles: any = [];
  public selectedNewsChannel = "Top 10熱門新聞";
  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  constructor(
    private currencyService: CurrencyService,
    private observer: BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private newsApi: NewsService) {

  }
  ngOnInit(): void {
    this.newsApi.initArticles()
      .subscribe((res: any) => {
        console.log(res);
        this.articles = res.articles;
      })
    this.newsApi.initSources()
      .subscribe((res: any) => {
        console.log(res);
        this.sources = res.sources;
      })
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
      });

    //解BUG(https://youtu.be/cvdBjXsqLIQ?t=1714)
    this.cdr.detectChanges();
  }

  sendCurrency(event: string) {
    console.log(event);
    this.currencyService.setCurrency(event);
  }

  searchSource(source: any) {
    this.newsApi.getArticlesByID(source.id)
      .subscribe((res: any) => {
        this.articles = res.articles;
        this.selectedNewsChannel = source.name;
      })
  }
}
