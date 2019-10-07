import { RouterModule } from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const AppRouting = RouterModule.forRoot([
    {path:'portfolio', component:PortfolioComponent},
    {path:'userdetails/:id', component:UserdetailsComponent}
    ])