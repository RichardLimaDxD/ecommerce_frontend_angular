import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { IDeliveryMethod } from 'src/app/shared/Models/DeliveryMethod';
import { CheckoutService } from '../checkout.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.scss'],
})
export class CheckoutDeliveryComponent implements OnInit {
  @Input() checkoutForm: FormGroup;
  deliveryMethods: IDeliveryMethod[];
  constructor(
    private checkoutService: CheckoutService,
    private basketService: BasketService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.checkoutService.getDeliveryMehtods().subscribe({
      next: (res: IDeliveryMethod[]) => {
        this.deliveryMethods = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  setShippingPrice(deliceryMethod: IDeliveryMethod) {
    this.basketService.setShippingPrice(deliceryMethod);
  }

  onFinalizeOrder() {
    this.checkoutService.deleteLocalBasekt();

    this.router.navigate(['/shop']);

    window.location.reload();
  }
}
