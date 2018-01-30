import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'views-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginRequired: boolean = true;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.asyncIsAuthenticated().then((authenticated) => {
      this.loginRequired = !authenticated;
    });
  }

  needsLogin() {
    console.log('test');
    return !this.authService.isAuthenticated();
  }
}
