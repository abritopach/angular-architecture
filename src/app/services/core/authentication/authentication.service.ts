import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorage } from '@ngx-pwa/local-storage';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(private localStorage: LocalStorage) { }

  checkToken() {
    this.localStorage.getItem(TOKEN_KEY).subscribe((res) => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }

  login() {
    return this.localStorage.setItem(TOKEN_KEY, 'Bearer 1234567').subscribe(() => {
      this.authenticationState.next(true);
    });
  }

  logout() {
    return this.localStorage.removeItem('TOKEN_KEY').subscribe(() => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
