import { getLocaleTimeFormat } from '@angular/common';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { IShoppingCart } from '../Ishopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCardService {
userId;
  constructor(private db: AngularFireDatabase) { }


   create() {
     if(this.userId)
    {
      console.log('i m user')
      return this.db.list('/shopping-cart/').push(
       this.userId

    )}
    else return this.db.list('/shopping-cart').push(
      {dsdsds:'1'})
    }
  getUserCart(userId){
    console.log(userId)
    this.userId= userId;
  }
 
  public async getCart(): Promise<Observable<IShoppingCart>> {
    let cartId = await this.getOurCartId();
   
    return this.db.object('/shopping-cart/' + cartId).
      valueChanges().pipe(map(cart => new IShoppingCart((cart as any).items)))
      
  }
  public async getCart1(): Promise<AngularFireObject<IShoppingCart>> {
    let cartId = await this.getOurCartId();
    console.log('mmm' + '/shopping-cart/' + cartId + '/items');
   
    return this.db.object('/shopping-cart/' + cartId);      
  }
changeUser(){
  this.userId=null;

}
  private async getOurCartId() {
    let cartId;
    if(this.userId) cartId= this.userId;
    else cartId=localStorage.getItem('cartId')
    if (cartId) return cartId;
    let result = await this.create();
    console.log(result.key);
    localStorage.setItem('cartId', result.key);
    return result.key;

  }
  private getItem(cartID: string, productID: string) {
    this.db.object('/shopping-cart/' + cartID + '/items' + productID);
  }

  async addToCart(product,details) {
    console.log(details)
    this.updateCart(product, 1,details);
  }
  async removeFromCart(product,details) {
    this.updateCart(product, -1,details);

  }

async deleteCart(){
  let cartId = await this.getOurCartId();
  return this.db.object('/shopping-cart/' + cartId).remove();

}
  async updateCart(product, state,details) {

    let cartID = await this.getOurCartId();
    console.log('cartID' + cartID);
    console.log('producto' + product);
let productKey= product.key+details.color+details.sizen;
    let items$ = this.db.object('/shopping-cart/' + cartID + '/items/' + productKey);
    console.log('item')
    console.log('/shopping-cart/' + cartID + '/items/' + product.key);
    
    items$.snapshotChanges().pipe(take(1)).subscribe((item: any) => {
      console.log(item);

      if (item.payload.exists() && item.payload.val().product.color==details.color
       && item.payload.val().product.size==details.sizen) {
        if(item.payload.val().product.size==details.sizen){console.log(state)}
        console.log(item.payload.val().product.color);
        items$.update({ quantity: item.payload.val().quantity + state });
      }
      else {
        console.log('notexist');
        productKey= product.key+details.color+details.sizen;
        items$ = this.db.object('/shopping-cart/' + cartID + '/items/' + productKey);

        items$.update({

          product:
          {
            title: product.payload.val().title,
            price: product.payload.val().price,
            category: product.payload.val().category,
            imgURL: product.payload.val().imgURL,
            color:details.color,
            size: details.sizen,
            secondCategory: product.payload.val().secondCategory
          }

          , quantity: 1
        });




      }

    });

  }
}
