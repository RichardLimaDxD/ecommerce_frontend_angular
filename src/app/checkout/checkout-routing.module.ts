import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { ChechoutSuccessComponent } from '../shared/Components/chechout-success/chechout-success.component';

const routes: Routes = [
  { path: '', component: CheckoutComponent },
  { path: 'success', component: ChechoutSuccessComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
