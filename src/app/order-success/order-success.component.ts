import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
orders$;
  constructor(private ordsvr:OrdersService) {
    console.log('kkkkkkkkkkkkkkkkkkkkkk')

this.orders$=this.ordsvr.getOrders();
this.orders$.subscribe(order=>console.log(order))
console.log('kkkkkkkkkkkkkkkkkkkkkk')
   }
   kk(){
     console.log('jjj')
   }

  ngOnInit(): void {
  }

}
