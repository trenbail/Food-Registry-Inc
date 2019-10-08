import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
 
 export const AppRouting = RouterModule.forRoot([
     {path:'login', component:LoginComponent}
     ])