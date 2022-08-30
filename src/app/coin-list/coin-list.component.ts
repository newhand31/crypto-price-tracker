import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ApiService } from '../service/api/api.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { CurrencyService } from '../service/currency/currency.service';


@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {

  //屬性
  bannerData: any = [];
  currency: string = "USD";
  displayedColumns: string[] = ['symbol', 'current_price', 'price_change_percentage_24h', 'market_cap'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  //屬性END

  constructor(private api: ApiService, private router: Router, private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.getAllData();
    this.getBannerData();
    this.currencyService.getCurrency()
      .subscribe(val => {
        this.currency = val;
        this.getAllData();
        this.getBannerData();
      });
  }

  // Table功能

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // Table功能END

  // API取DATA
  getAllData() {
    this.api.getCurrency(this.currency)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        ,
        error: () => {
          console.log("error!!");
        }
      })
  }

  getBannerData() {
    this.api.getTrendingCurrency(this.currency)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.bannerData = res;
        },
        error: () => {
          console.log("error!!");
        }
      })
  }
  // API取DATA END
  gotoDetails(row: any) {
    this.router.navigate(['coin-detail', row.id]);
  }

}
