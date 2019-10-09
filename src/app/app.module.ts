import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AddFoodComponent } from './add-food/add-food.component'
import { FormsModule }   from '@angular/forms';
import { AddCarePackageComponent } from './add-carepackage/add-carepackage.component'
import { HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AddFoodComponent,
    AddCarePackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouting,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [NavbarComponent]
})
export class AppModule { }
