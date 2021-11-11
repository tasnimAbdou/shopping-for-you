import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  userId;
  constructor(private db: AngularFireDatabase, private auth: AuthService) { }
  create() {
    return this.db.list('/orders/').push({
      dateCreated: new Date().getTime()
    });
  }
  getuserId(userId) {
    console.log(userId)
    if (userId) { this.userId = userId }
    else this.userId = null;
  }
  async getOrderId() {

    let ordId;
    if (this.userId) { ordId = this.userId; }
    else { ordId = localStorage.getItem('ordId'); }
    if (ordId) return ordId

    let result = await this.create();
    console.log(result.key)
    localStorage.setItem('ordId', result.key);
    return result.key;

  }
  async placeOrder(Info, carts) {
    let ordId = await this.getOrderId();
    console.log(ordId)
    let order$ = this.db.list('/orders/');
    order$.push(
      {
        userId: ordId,
        orderDetails:
        {

          carts:carts.items,


        }
        ,
        shippingInfo:
        {
          building: Info.building,
          city: Info.city,
          country: Info.country,
          mobile: Info.mobile,
          name: Info.name,
          zone: Info.zone,


        }

      }
    );



  }
}
