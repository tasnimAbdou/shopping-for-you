import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private db: AngularFireDatabase) { }
  create(product) {
    return this.db.list('/products').push(product);

  }
  get() {
    return this.db.list('/products').snapshotChanges();

  }
  getById(productId: string) {
    console.log('/products/' + productId);
    return this.db.object('/products/' +productId).valueChanges();
  }

  apdate(productId: string, prduct) {
    return this.db.object('/products/' + productId).update(prduct);

  }
  delete(productId: string) {
    console.log('delete');
    return this.db.object('/products/' + productId).remove();

  }

}
