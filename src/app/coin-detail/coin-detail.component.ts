import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {

  coinData: any;
  coinId!: string;
  days: number = 1;
  currency!: string;

  constructor(private api: ApiService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(val => {
      this.coinId = val['id'];
    })
    this.getCoinData();
  }

  getCoinData() {
    this.api.getCurrencyById(this.coinId)
      .subscribe(res => {
        this.coinData = res;
        console.log(this.coinData);
      });
  }

}
