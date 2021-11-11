import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminMangeusersComponent } from './admin/admin-mangeusers/admin-mangeusers.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { NewFormComponent } from './admin/admin-products/new-form/new-form.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent},
  { path: 'orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService,AdminAuthGuardService] },
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
  { path: 'admin/products/new', component: NewFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
  { path: 'admin/products/:id', component: NewFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
  {path:'product-card',component:ProductcardComponent},
  { path: 'admin/users', component: AdminMangeusersComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: '', component: ProductsComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'login', component: LoginComponent },
  { path: 'chec-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
