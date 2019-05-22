import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {MatCardModule} from '@angular/material/card';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
