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
import {OrdersModule} from './orders/orders.module';
import { UpdatePackageComponent } from './update-package/update-package.component';
import { UpdatePackageService } from './update-package/update-package.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AddFoodComponent,
    AddCarePackageComponent,
    RegistrationComponent,
    UpdatePackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouting,
    FormsModule,
    HttpClientModule,
    OrdersModule
  ],
  providers: [
    APIService,
    LoginService,
    UpdatePackageService
  ],
  bootstrap: [NavbarComponent]
})
export class AppModule { }
