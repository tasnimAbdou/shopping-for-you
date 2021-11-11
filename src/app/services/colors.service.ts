import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor(private db:AngularFireDatabase) { }

  getColors(){
return this.db.list('/colors').valueChanges();

  }
  getGradient(color){

return this.db.list('/colors/'+color+'/gradiant').valueChanges();

  }
}
