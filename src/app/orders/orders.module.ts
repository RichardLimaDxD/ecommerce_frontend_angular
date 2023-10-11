import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [OrdersComponent],
  imports: [CommonModule, OrdersRoutingModule],
})
export class OrdersModule {}
