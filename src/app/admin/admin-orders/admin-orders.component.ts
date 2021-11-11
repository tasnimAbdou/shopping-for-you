import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
orders:any[];
  orders$;
  constructor(private ordsvr:OrdersService) {
    console.log('kkkkkkkkkkkkkkkkkkkkkk')
    this.orders$=this.ordsvr.getOrders().subscribe(order=>
      {console.log(order)
      this.orders=order;
      console.log(this.orders)
      
      
      });
    

console.log(this.orders$)
   }
   

  ngOnInit(): void {
  }

}
