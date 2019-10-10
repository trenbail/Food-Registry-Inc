import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AddFoodComponent } from './add-food/add-food.component'
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { AddCarePackageComponent } from './add-carepackage/add-carepackage.component'
import { HttpClientModule } from '@angular/common/http';
import { APIService } from './shared/api.service';
import { LoginService } from './login/login.service';
import { OrdersComponent } from './orders/orders.component';
import { RequestorderComponent } from './orders/requestorder/requestorder.component';
import { UpdateQuantityComponent } from './update-quantity/update-quantity.component';
import { UpdateQuantityService } from './update-quantity/update-quantity.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AddFoodComponent,
    AddCarePackageComponent,
    RegistrationComponent,
    OrdersComponent,
    RequestorderComponent,
    UpdateQuantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouting,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    APIService,
    LoginService,
    UpdateQuantityService
  ],
  bootstrap: [NavbarComponent]
})
export class AppModule { }