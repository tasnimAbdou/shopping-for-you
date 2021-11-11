import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-admin-mangeusers',
  templateUrl: './admin-mangeusers.component.html',
  styleUrls: ['./admin-mangeusers.component.css']
})
export class AdminMangeusersComponent implements OnInit {
users$;
sub:Subscription;
  constructor(private auth:AuthService,private usersvr:UsersService) { 

    this.sub = this.auth.get().subscribe(users => {

      this.users$  = users;
      // Calling the DT trigger to manually render the table
    });  

  }
  ischecked(event,id){

  if(event.target.checked){console.log('check');
console.log(id);
this.auth.selectAdmin(id,true)
}
  else{console.log('notooocheck');
  this.auth.selectAdmin(id,false)
}
}
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();

  }

}
