import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Ecommerc';

  constructor(
    private basketService: BasketService,
    private accountServices: AccountService
  ) {}

  ngOnInit(): void {
    this.loadBasket();
    this.loadCurrentUser();
  }

  loadBasket() {
    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe({
        next: () => {},
        error: (err) => {},
      });
    }
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');

    this.accountServices.loadCurrentUser(token).subscribe({
      next: () => {},
      error: (err) => {},
    });
  }
}
