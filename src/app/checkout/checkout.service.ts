import { HttpClient } from '@angular/common/http';
import { IDeliveryMethod } from '../shared/Models/DeliveryMethod';
import { IOrderToCreate } from '../shared/Models/Order';
import { environment } from 'src/environments/enviroment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { IBasket } from '../shared/Models/Basket';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  _baseURL = environment.baseURl;
  private basketSource = new BehaviorSubject<IBasket>(null);
  constructor(private http: HttpClient) {}

  getDeliveryMehtods() {
    return this.http.get(this._baseURL + 'Orders/get-delivery-methods').pipe(
      map((res: IDeliveryMethod[]) => {
        return res.sort((a, b) => b.price - a.price);
      })
    );
  }

  createOrder(order: IOrderToCreate) {
    return this.http.post(this._baseURL + 'Orders/create-order', order);
  }

  deleteLocalBasekt() {
    this.basketSource.next(null);
    localStorage.removeItem('basket_id');
  }
}
