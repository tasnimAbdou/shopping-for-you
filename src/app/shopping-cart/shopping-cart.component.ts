import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from '../services/shopping-card.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
carts$;
  constructor(private cartsvr:ShoppingCardService) { }

 async  ngOnInit(){
   this.carts$= await this.cartsvr.getCart();
   console.log('ccccc')
   console.log(this.carts$)

  }

}
