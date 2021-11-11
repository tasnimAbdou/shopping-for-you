
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { IShoppingCartItems } from './Ishopping-cart-items';

export class IShoppingCart {

    constructor(private items: IShoppingCartItems) { }
    get getCartCounter() {
        let cartCounter = 0;
        for (let productId in this.items) {
            cartCounter += this.items[productId].quantity;

        }
        return cartCounter;
    }

    get totalPrice() {
        let total:number = 0;
        for (const productId in this.items) {
            if (this.items[productId].quantity) {
                let price =Number(this.items[productId].product.price)*Number(this.items[productId].quantity) ;

                total += price;
            }
        }
        return total;

    }
     itemPrice(productId) {
        let price:number = 0;
            if (this.items[productId].quantity) {
                 price =Number(this.items[productId].product.price)*Number(this.items[productId].quantity) ;

            }
        
        return price;

    }
get carts1(){
    
    return Object(this.items); 

}
    get productids() {

        return Object.keys(this.items);
    }

}
