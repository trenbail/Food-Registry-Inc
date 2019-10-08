import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddFoodComponent } from './add-food/add-food.component'
 
 export const AppRouting = RouterModule.forRoot([
     {path:'login', component:LoginComponent},
     {path:'addfood', component:AddFoodComponent}
 
     ])