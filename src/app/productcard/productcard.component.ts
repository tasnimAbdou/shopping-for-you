import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';
import { ShoppingCardService } from '../services/shopping-card.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {
  @Input('product') product:any=[];
  @Input('shoppingCart') shoppingCart;
  orddetails:any={};
  id;
  constructor( private productsvr:ProductsService,
    private cartsvr:ShoppingCardService,
    private actRout:ActivatedRoute
    ) {
      this.id = this.actRout.snapshot.paramMap.get('id');
      if (this.id) {
        this.productsvr.getById(this.id).pipe(take(1)).subscribe(prod => {
          if (prod) {
            this.orddetails = prod;
          }
        })
      }
    }
addToCart(){
this.cartsvr.addToCart(this.product,this.orddetails);
console.log('productn');
console.log(this.product);

}
onsubmit(value){
  console.log(this.orddetails)
}
getQuantity(){
  
  if(!this.shoppingCart){
    return 0;
  }

let item=this.shoppingCart.items[this.product.key];

return item? item.quantity:0;
}
removeFromCart(){
this.cartsvr.removeFromCart(this.product,this.orddetails);


}

try(f,n){
  console.log('orddetails');
  console.log(n);
  console.log(this.orddetails)


}
  ngOnInit(): void {    


  }

}
