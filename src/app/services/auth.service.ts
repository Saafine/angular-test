// !todo this can be deleted
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public isAuthenticated() {
    if (localStorage.getItem('token') === '1234') {
      return true;
    } else {
      return false;
    }
  }

  public asyncIsAuthenticated(): Promise<boolean> {
    if (localStorage.getItem('token') === '1234') {
      return Promise.resolve((true));
    } else {
      return Promise.resolve((false));
    }
  }
}
