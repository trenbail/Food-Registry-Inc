import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AddFoodComponent } from './add-food/add-food.component'
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddCarePackageComponent } from './add-carepackage/add-carepackage.component'
import { HttpClientModule } from '@angular/common/http';
import { APIService } from './shared/api.service';
import { LoginService } from './login/login.service';
import { UpdateInventoryComponent } from './update-inventory/update-inventory.component';
import { UpdateInventoryService } from './update-inventory/update-inventory.service';
import { OrdersModule } from './orders/orders.module';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { HomeComponent } from './home/home.component';
import {LandingComponent} from './landing/landing.component';
import { ViewInventoryComponent} from './view-inventory/view-inventory.component'



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AddFoodComponent,
    AddCarePackageComponent,
    RegistrationComponent,
    UpdateInventoryComponent,
    UpdateProfileComponent,
    HomeComponent,
    LandingComponent,
    ViewInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouting,
    FormsModule,
    HttpClientModule,
    OrdersModule,
    ReactiveFormsModule
  ],
  providers: [
    APIService,
    LoginService,
    UpdateInventoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
