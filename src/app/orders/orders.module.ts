import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RequestorderComponent} from './requestorder/requestorder.component';
import {OrdersComponent} from './orders.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    RequestorderComponent,
    OrdersComponent
  ],
  exports: [
    OrdersComponent,
    RequestorderComponent
  ],
  imports: [
    CommonModule, FormsModule
  ]
})
export class OrdersModule { }
