import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class SizeService {

  constructor(private db:AngularFireDatabase) { }
clothSize(){
  return this.db.list('/size/cloth-size').valueChanges();

}
shoesSizeBaby(){
return this.db.list('/size/shoes-size').valueChanges();

}
shoesSizeChild(){
  return this.db.list('/size/shoes-size-child').valueChanges();
  
  }
shoesSizeAdult(){
    return this.db.list('/size/shoes-size-adult').valueChanges();
    
    }

}
