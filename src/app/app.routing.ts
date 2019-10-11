import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddFoodComponent } from './add-food/add-food.component'
import { AddCarePackageComponent } from './add-carepackage/add-carepackage.component'
import { RegistrationComponent } from './registration/registration.component';
import { OrdersComponent } from './orders/orders.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { RequestorderComponent } from './orders/requestorder/requestorder.component';
import { UpdateInventoryComponent } from './update-inventory/update-inventory.component';
import { ViewInventoryComponent} from './view-inventory/view-inventory.component';
import { FillOrderComponent } from './orders/fillorder/fillorder.component';


export const AppRouting = RouterModule.forRoot([
  { path: 'login', component: LoginComponent },
  { path: 'addfood', component: AddFoodComponent },
  { path: 'addcarepackage', component: AddCarePackageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'order', component: OrdersComponent },
  { path: 'updateprofile', component: UpdateProfileComponent },
  { path: '', component: HomeComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'requestorder', component: RequestorderComponent },
  { path: 'updateinventory', component: UpdateInventoryComponent },
  { path: 'viewinventory', component: ViewInventoryComponent },
  { path: 'fulfillorder', component: FillOrderComponent }
]);
