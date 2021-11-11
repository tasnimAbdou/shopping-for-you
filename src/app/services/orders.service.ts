import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
currentUser;
  constructor(private db: AngularFireDatabase) { }
  
  getOrders(){
return this.db.list('/orders').snapshotChanges();

  }
  getuserId(userId){
    if (userId) { this.currentUser = userId }
    else this.currentUser = null;
  }
  getCartId(orderkey){

return this.db.object('/orders/'+orderkey+'/userId').valueChanges();

  }
  getCart(orderkey){
    
    return this.db.list('/orders/'+orderkey+'/orderDetails/'+'carts').valueChanges();


  }
  getshipInfo(orderkey){
    
    return this.db.object('/orders/'+orderkey+'/shippingInfo').valueChanges();


  }
}
