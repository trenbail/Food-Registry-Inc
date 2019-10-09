import { RouterModule } from '@angular/router';
<<<<<<< Updated upstream
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const AppRouting = RouterModule.forRoot([
    {path:'portfolio', component:PortfolioComponent},
    {path:'userdetails/:id', component:UserdetailsComponent}
    ])
=======
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

 export const AppRouting = RouterModule.forRoot([
     {path:'login', component:LoginComponent},
     {path:'registration', component:RegistrationComponent}
     ])
>>>>>>> Stashed changes
