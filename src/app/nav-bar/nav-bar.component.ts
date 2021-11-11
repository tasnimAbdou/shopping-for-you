import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
import { CheckoutService } from '../services/checkout.service';
import { OrdersService } from '../services/orders.service';
import { ShoppingCardService } from '../services/shopping-card.service';
import { userInfo } from '../services/userinfo';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  appUser:userInfo;
  cart$;
  userName;
  constructor(public service: AuthService,private orders:OrdersService, private cartsvr:ShoppingCardService,private checkout:CheckoutService) {
console.log(service.user$.subscribe(user=>{console.log(user)
this.service.getId(user.uid)
this.cartsvr.getUserCart(user.uid);
this.checkout.getuserId(user.uid)
this.orders.getuserId(user.uid)

}))

  }
  async ngOnInit() {
 this.cart$ = await this.cartsvr.getCart();

  }
  logout() {
    this.service.logout();
    this.cartsvr.changeUser();

  }
}
