import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';
import { ChildRouting } from './child.routing';

import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { HeaderComponent } from './mycomp/header/header.component';
import { FooterComponent } from './mycomp/footer/footer.component';
import {UserData} from './mycomp/shared/userdata.service'
import {DepartmentData} from './mycomp/shared/departmentdata.service'
import {FormsModule} from '@angular/forms';
import { FavoriteComponent } from './mycomp/favorite/favorite.component';
import { LikeComponent } from './mycomp/like/like.component';
import { PipedemoComponent } from './mycomp/pipedemo/pipedemo.component'
import { Summary } from './mycomp/shared/summary.pipe';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
<<<<<<< Updated upstream
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LandingpageComponent } from './landingpage/landingpage.component'
=======

>>>>>>> Stashed changes
@NgModule({
  declarations: [
    AppComponent,
    MycompComponent,
    HeaderComponent,
    FooterComponent,
    FavoriteComponent,
    LikeComponent,
    PipedemoComponent,
    Summary,
    LoginComponent,
<<<<<<< Updated upstream
    RegistrationComponent,
    UserdetailsComponent,
    PortfolioComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,FormsModule,AppRouting, ChildRouting
=======
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouting
>>>>>>> Stashed changes
  ],
  providers: [UserData, DepartmentData],
  bootstrap: [LandingpageComponent]
})
export class AppModule { }
