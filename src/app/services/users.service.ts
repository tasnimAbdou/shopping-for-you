import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth.service';
import { userInfo } from './userinfo';
import { Observable, from, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {firebase} from 'firebase/firebase-app';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db: AngularFireDatabase, private authSrv: AuthService) { }
  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update(
      {
        name: user.displayName,
        email: user.email,
        isAdmin:false
      })

  }
  
  getUser(uid: string) {
    return this.db.object('/users/' + uid);

  }


  get AppUser$(): Observable<userInfo> {
    return this.authSrv.user$.pipe(switchMap(user => {
      if (user) {
        return this.getUser(user.uid).valueChanges();
      }
      else {
        return of(null);
      }

    }));

  }


} 
  

