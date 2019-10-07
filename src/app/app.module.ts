import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { HeaderComponent } from './mycomp/header/header.component';
import { FooterComponent } from './mycomp/footer/footer.component';
import {UserData} from './mycomp/shared/userdata.service'
import {DepartmentData} from './mycomp/shared/departmentdata.service'
import {FormsModule} from '@angular/forms';
import { FavoriteComponent } from './mycomp/favorite/favorite.component';
import { LikeComponent } from './mycomp/like/like.component'
@NgModule({
  declarations: [
    AppComponent,
    MycompComponent,
    HeaderComponent,
    FooterComponent,
    FavoriteComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [UserData, DepartmentData],
  bootstrap: [AppComponent]
})
export class AppModule { }
