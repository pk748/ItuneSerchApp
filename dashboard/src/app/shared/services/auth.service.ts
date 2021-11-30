import { Injectable } from '@angular/core';
import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Hub, ICredentials } from '@aws-amplify/core';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
// import { CognitoUser } from 'amazon-cognito-identity-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: boolean;
  private _authState: Subject< any> = new Subject<any>();
  authState: Observable<any> = this._authState.asObservable();
  public signinValue:any;

  public static SIGN_IN = 'signIn';
  public static SIGN_OUT = 'signOut';
  public static FACEBOOK = CognitoHostedUIIdentityProvider.Facebook;
  public static GOOGLE = CognitoHostedUIIdentityProvider.Google;

  constructor(
    private _router: Router
  ) {
    Hub.listen('auth', (data) => {
      const { channel, payload } = data;
      if (channel === 'auth') {
        this._authState.next(payload.event);
      }
    });
  }

  signIn(username: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      Auth.signIn(username, password)
        .then((user : any) => {
          this.signinValue = user
          this.loggedIn = true;
          resolve(user);
        }).catch((error: any) => reject(error));
    });
  }

  completeNewPasswordChallenge(userData, password: string, requiredAttributes): Promise<any> {
    return new Promise((resolve, reject) => {
      Auth.completeNewPassword(userData, password, requiredAttributes)
        .then((user: any) => {
          // this.loggedIn = true;
          resolve(user);
        }).catch((error: any) => reject(error));
    });

  }

  

  signOut(): Promise<any> {
    return Auth.signOut()
      .then(() => this._router.navigate(['/authentication/login']))
  }

  signOutUser(): Promise<any> {
    return Auth.signOut()
      .then(() => this._router.navigate(['/authentication/login']))
  }
}
