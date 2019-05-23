import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  // FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private socialAuthService: AuthService) { }

  // public socialSignIn(socialPlatform: string) {
  //   let socialPlatformProvider;
  //   if (socialPlatform == "facebook") {
  //     socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
  //   } else if (socialPlatform == "google") {
  //     socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  //   }

  //   this.socialAuthService.signIn(socialPlatformProvider).then(
  //     (userData) => {
  //       console.log(socialPlatform + " sign in data : ", userData);
  //       // Now sign-in with userData
  //       // ...

  //     }
  //   );
  // }

  public signinWithGoogle () {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
 
    this.socialAuthService.signIn(socialPlatformProvider)
    .then((userData) => {
       //on success
       //this will return user data from google. What you need is a user token which you will send it to the server
       console.log(userData.idToken);
    });
 }


  ngOnInit(){
    
  }
}
