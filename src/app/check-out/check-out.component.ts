import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CheckoutService } from '../services/checkout.service';
import { ShoppingCardService } from '../services/shopping-card.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  shippingInfo: any = {};
  iscredit;
  carts$;
  carts;
  constructor(private checksvr: CheckoutService, private cartsvr: ShoppingCardService,private router: Router) {
  
  }
  shippingInf(Info) {
    console.log(Info)
    console.log(this.carts$)
    this.checksvr.placeOrder(Info, this.carts);
    this.orderPlaced();
  }
  isCredit(e) {

    this.iscredit = e;

  }
  orderPlaced(){
    console.log('orderd');
    this.cartsvr.deleteCart();
    this.router.navigateByUrl('/products');


  }
  async ngOnInit() {
    
    this.carts$ = await this.cartsvr.getCart();
this.carts$.subscribe(carts=>{
  console.log(carts)
  this.carts=carts;
})
  }

}
