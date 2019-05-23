import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
  } 
  from "angular-6-social-login";
  // } from 'angularx-social-login';


// Configs 
export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig(
        [
          // {
          //   id: FacebookLoginProvider.PROVIDER_ID,
          //   provider: new FacebookLoginProvider("Your-Facebook-app-id")
          // },
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider("368729150840-rl60t01f22rqirjmntq72es1qchusk4d.apps.googleusercontent.com")
          }
        ]
    );
    return config;
  }