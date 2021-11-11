import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private db: AngularFireDatabase) { }
  categories() {
    return this.db.list('/categories').valueChanges();

  }
  secondCategories() {
    return this.db.list('/secondcategories').valueChanges();

  }
  
 

}
