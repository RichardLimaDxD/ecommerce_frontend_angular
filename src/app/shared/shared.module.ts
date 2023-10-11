import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketSummeryComponent } from './Components/basket-summery/basket-summery.component';
import { ChechoutSuccessComponent } from './Components/chechout-success/chechout-success.component';
import { OrderTotalsComponent } from './Components/order-totals/order-totals.component';
import { PagerComponent } from './Components/pager/pager.component';
import { PagingHeaderComponent } from './Components/paging-header/paging-header.component';
import { StepperComponent } from './Components/stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    BasketSummeryComponent,
    ChechoutSuccessComponent,
    OrderTotalsComponent,
    PagerComponent,
    PagingHeaderComponent,
    StepperComponent,
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    CdkStepperModule,
    RouterModule,
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    CarouselModule,
    OrderTotalsComponent,
    ReactiveFormsModule,
    BsDropdownModule,
    CdkStepperModule,
    StepperComponent,
    BasketSummeryComponent,
  ],
})
export class SharedModule {}
