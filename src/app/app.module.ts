import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './login/login.component';

import {MatCardModule} from '@angular/material/card';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from 'angular5-social-login';

import { getAuthServiceConfigs } from './socialloginConfig';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [
    // SocialLoginModule.initialize(getAuthServiceConfigs),
    {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
