import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, of, Subscription } from 'rxjs';
import  firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { userInfo } from './userinfo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: userInfo;
  id;
  emails=[""];
  sub:Subscription;
  user$: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.user$ = afAuth.authState;
    console.log(this.user$)
  }
  ngOnInit(): void {
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification()
    this.router.navigate(['/products']);
  
  }
  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);

  }
  register(user) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.psw)
      .then((result) => {
        this.sendEmailVerification(); // Sending email verification notification, when new user registers
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  login2(user) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.psw).catch(function (error) {
      console.log(error);
    })

  }
  get() {

    return this.db.list('/users').snapshotChanges();

  }
  getById(userId) {
    console.log('/users/' + userId);
    return this.db.object('/users/' + userId).valueChanges();
  }
  getId(id){
    this.id= id;
  }
  setName(user){
    
    console.log('jhuhuhuhuhu');
    console.log(this.id)
    
    return this.db.object('/users/'+this.id).update({name:user});
  }
  selectAdmin(userId,state){
   
   return this.db.object('/users/'+userId).update({isAdmin:state})
  }
  
  

}
