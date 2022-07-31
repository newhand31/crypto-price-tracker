import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getBannerData();
    this.getAllData();
  }

  getBannerData() {
    this.api.getTrendingCurrency("NTD")
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: () => {
          console.log("error!!");
        }
      })
  }

  getAllData() {
    this.api.getCurrency("NTD")
      .subscribe({
        next: (res) => {
          console.log(res);
        }
        ,
        error: () => {
          console.log("error!!");
        }
      })
  }
}
