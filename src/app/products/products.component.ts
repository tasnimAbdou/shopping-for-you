import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from, Observable, Subscription } from 'rxjs';
import { CategoriesService } from '../services/categories.service';
import { ProductsService } from '../services/products.service';
import { switchMap } from 'rxjs/operators';
import { ShoppingCardService } from '../services/shopping-card.service';
import { async } from '@angular/core/testing';
import { IShoppingCart } from '../Ishopping-cart';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: any[] = [];
  filtered: any[] = [];
  secondFiltered: any[] = [];

  category = '';
  secondCategory = '';
  carts;
carts1;
cartsm;
  carts$: Observable<IShoppingCart>;
  categories$;
  secondCategories$;

  subscription: Subscription;
  constructor(private productsvr: ProductsService,
    private categorysvr: CategoriesService,
    private route: ActivatedRoute,
    private cartsvr: ShoppingCardService

  ) {
    this.subscription = this.productsvr.get().pipe(switchMap(prod => {

      this.products = prod;
      this.filtered=this.products;
      
      return this.route.queryParamMap;

    }))
      .subscribe(params => {
        this.category = params.get('catg');
        this.secondCategory = params.get('scatg');
        this.filtered = (this.category) ?
        this.products.filter(p => p.payload.val().category === this.category) : this.filtered;
        this.secondFiltered=(this.secondCategory)?
        this.filtered.filter(p => p.payload.val().secondCategory === this.secondCategory ) : this.filtered;
       
        
        console.log(this.filtered);
        console.log(this.category);

console.log(this.secondFiltered);
console.log(this.secondCategory);

      });
      
  }

  


  

  async ngOnInit(): Promise<void> {

    this.categories$=this.categorysvr.categories();
    this.secondCategories$=this.categorysvr.secondCategories();
      this.carts$ = await this.cartsvr.getCart();
(await this.cartsvr.getCart1()).valueChanges().subscribe(cart =>{this.carts1=cart;
  console.log('cart')

  console.log(this.carts1)
  
})
    this.carts=await this.cartsvr.getCart();

  this.carts$.forEach(cart => {
  this.cartsm=cart;
  console.log(this.cartsm)
});




    console.log('cart1')

    console.log(this.carts);

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }
}
