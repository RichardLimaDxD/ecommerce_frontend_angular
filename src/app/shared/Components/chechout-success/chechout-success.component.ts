import { Component, OnInit } from '@angular/core';
import { IOrder } from '../../Models/Order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chechout-success',
  templateUrl: './chechout-success.component.html',
  styleUrls: ['./chechout-success.component.scss'],
})
export class ChechoutSuccessComponent implements OnInit {
  order: IOrder;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation && navigation.extras && navigation.extras.state;
    if (state) {
      this.order = state as IOrder;
    }
  }

  ngOnInit(): void {}
}
