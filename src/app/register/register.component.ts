import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'jquery';
import { Subscription } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { switchMap, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { ShoppingCardService } from '../services/shopping-card.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {};
  id = [];
  k;
  submitted;
  sub:Subscription;
  constructor(private auth: AuthService,
     private actRoute: ActivatedRoute,private cartsvr:ShoppingCardService) {

  }
  


  async save(user) {
    
    this.auth.register(user);
    console.log(user.email)
    this.auth.setName(user.name);
    this.cartsvr.create();
  }
validation(form){
if(!form.name){
console.log('required')



}else{console.log('not work')}


}
 
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();

  }
}
