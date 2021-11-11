import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  constructor(
    private userSrv: UsersService,
    private authservice: AuthService,
    private route: ActivatedRoute,
    router: Router) {
    this.authservice.user$.subscribe(user => {
      if (user) {
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        router.navigateByUrl(returnUrl);
        this.userSrv.save(user);

      }

    })

  }
}
