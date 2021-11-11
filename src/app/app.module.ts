import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CssanimationComponent } from './cssanimation/cssanimation.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { environment } from 'C:/Users/nemo/project/src/environments/environment';
import { HomeComponent } from './home/home.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminMangeusersComponent } from './admin/admin-mangeusers/admin-mangeusers.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UsersService } from './services/users.service';
import { NewFormComponent } from './admin/admin-products/new-form/new-form.component';
import { CategoriesService } from './services/categories.service';

import { DataTablesModule } from 'angular-datatables';
import { ProductcardComponent } from './productcard/productcard.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import {MatSelectModule} from '@angular/material/select';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ShoppingCartComponent,
    LoginComponent,
    CssanimationComponent,
    HomeComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    AdminMangeusersComponent,
    NewFormComponent,
    ProductcardComponent,
    ProductFilterComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    MatSelectModule,
    AppRoutingModule,

    NoopAnimationsModule,
    FormsModule,
    DataTablesModule,
    CustomFormsModule
    
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UsersService,
    CategoriesService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
