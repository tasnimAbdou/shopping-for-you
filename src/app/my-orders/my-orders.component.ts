import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { ShoppingCardService } from '../services/shopping-card.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders:any[];
  orders$:any[]=[];
  shipping$:any[]=[];
currentUser;
  constructor(private ordsvr:OrdersService) {
    this.currentUser=this.ordsvr.currentUser;
    this.ordsvr.getOrders().subscribe(order=>
      {console.log(order)
      this.orders=order;
      console.log(this.orders)
      
     this.hghgh()


      });
    }

    
hghgh(){
  for(let i=0;i<this.orders.length;i++)
  {    this.ordsvr.getCartId(this.orders[i].key).subscribe(user=>
    {console.log(user)
    if(this.currentUser==user){
      console.log('user match')
      this.ordsvr.getshipInfo(this.orders[i].key).subscribe(info=>this.shipping$.push(info))
    this.ordsvr.getCart(this.orders[i].key).subscribe(cart=>{console.log(cart);
    
    this.orders$.push(cart)
  })
    
    }
    
    })

    
  console.log(this.shipping$)
  
  }


}
      ngOnInit() {
    
        
      }
    

}
