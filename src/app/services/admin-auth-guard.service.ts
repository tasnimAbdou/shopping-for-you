import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable, from } from 'rxjs';
import { UsersService } from './users.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private userSvr: UsersService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.userSvr.AppUser$.pipe(map((appuser:any)=> appuser.isAdmin));


  }
}
