import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RequestorderComponent} from './requestorder/requestorder.component';
import {OrdersComponent} from './orders.component';

@NgModule({
  declarations: [
    RequestorderComponent,
    OrdersComponent
  ],
  exports: [
    OrdersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
